import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rickandmorty-api';
import characterReducer from './characterSlice';

const rootReducer = combineReducers({
  characters: characterReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
