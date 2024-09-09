import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Outlet, Meta, Links, Scripts, ScrollRestoration } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createContext, useContext, useState, useEffect } from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit/react";
import { Provider } from "react-redux";
import { useSearchParams } from "react-router-dom";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const ThemeContext = createContext({
  themeType: "light",
  toggleTheme: () => {
  }
});
const useTheme = () => useContext(ThemeContext);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  function toggleTheme(themeType) {
    setTheme(() => themeType === "light" ? "dark" : "light");
  }
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return /* @__PURE__ */ jsx(
    ThemeContext.Provider,
    {
      value: {
        themeType: theme,
        toggleTheme
      },
      children
    }
  );
}
const endpoints = {
  character: "/character/",
  episode: "/episode/",
  location: "/location/"
};
const baseUrl = "https://rickandmortyapi.com/api";
const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (query) => `${endpoints.character}${query}`
    }),
    getCharacter: builder.query({
      query: (id) => `${endpoints.character}${id}`
    })
  })
});
const initialState = {
  characters: []
};
const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter(state, action) {
      const character = action.payload;
      state.characters.push(character);
    },
    removeCharacter(state, action) {
      const id = action.payload;
      state.characters = state.characters.filter(
        (character) => character.id !== id
      );
    },
    removeAllCharacters(state) {
      state.characters = [];
    }
  }
});
characterSlice.actions;
const characterReducer = characterSlice.reducer;
const rootReducer = combineReducers({
  characters: characterReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware)
});
function AllProviders({ children }) {
  return /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(Provider, { store, children }) });
}
function useLocalStorage(initState, key = "query-text") {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(initState));
        return initState;
      }
    } catch {
      return initState;
    }
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);
  const setValue = (newValue) => {
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
}
function SearchForm() {
  const [_, setSearchParams] = useSearchParams();
  const [query, setQuery] = useLocalStorage("");
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: query });
  };
  return /* @__PURE__ */ jsxs("form", { className: "search-form", onSubmit, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: "text",
        placeholder: "Type name from Rick and Morty",
        onInput: (e) => {
          const value = e.target.value;
          setQuery(value);
        },
        value: query
      }
    ),
    /* @__PURE__ */ jsx("button", { "aria-label": "search", className: "btn", children: "Search" })
  ] });
}
function Theme() {
  const { themeType, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsx("div", { className: "theme", children: /* @__PURE__ */ jsx(
    "button",
    {
      title: "Switch between dark and light mode",
      type: "button",
      "data-testid": "themBtn",
      className: "btn btn-theme",
      "aria-label": themeType,
      onClick: () => toggleTheme(themeType),
      children: themeType === "dark" ? /* @__PURE__ */ jsx(
        "img",
        {
          src: "./sun.svg",
          alt: "",
          className: "logo logo-theme",
          "data-testid": "sunLogo"
        }
      ) : /* @__PURE__ */ jsx(
        "img",
        {
          src: "./moon.svg",
          alt: "",
          className: "logo logo-theme",
          "data-testid": "moonLogo"
        }
      )
    }
  ) });
}
function Header() {
  return /* @__PURE__ */ jsxs("header", { children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "https://rickandmortyapi.com/", children: /* @__PURE__ */ jsx("img", { src: "./logo.svg", alt: "", className: "logo" }) }) }),
    /* @__PURE__ */ jsx(SearchForm, {}),
    /* @__PURE__ */ jsx(Theme, {})
  ] });
}
function Footer() {
  const date = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsx("a", { href: "https://rs.school/", children: /* @__PURE__ */ jsx("img", { src: "./rs_school_js.svg", alt: "", className: "logo" }) }),
    /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      date
    ] }),
    /* @__PURE__ */ jsx("a", { href: "https://github.com/Sepulator/", children: /* @__PURE__ */ jsx("img", { src: "./github.svg", alt: "", className: "logo" }) })
  ] });
}
const meta = () => [
  {
    title: "The Rick and Morty",
    charSet: "utf-8",
    viewport: "width=device-width, initial-scale=1"
  }
];
const links = () => [
  {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(AllProviders, { children }),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(ScrollRestoration, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "container main", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CwYFybyG.js", "imports": ["/assets/components-B0YQOiqb.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-TBx1NTBg.js", "imports": ["/assets/components-B0YQOiqb.js"], "css": ["/assets/root-BmVjENZW.css"] } }, "url": "/assets/manifest-f4cdea62.js", "version": "f4cdea62" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
