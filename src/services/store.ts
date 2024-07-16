import { configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './rickandmorty-api';
import characterReducer from './characterSlice';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
