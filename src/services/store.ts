import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rickandmorty-api';
import characterReducer from './characterSlice';

const rootReducer = combineReducers({
  characters: characterReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

// export const store = configureStore({
//   reducer: {
//     characters: characterReducer,
//     [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(rickAndMortyApi.middleware),
// });

export const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  });

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = AppStore['dispatch'];
