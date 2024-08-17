import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { FormValue } from './interfaces';
import { countryList } from './const';

export interface FormState {
  formValues: FormValue[];
  countries: string[];
  isLastAdded: boolean;
}

const initialState: FormState = {
  formValues: [],
  countries: countryList,
  isLastAdded: false,
};

const formSlice = createSlice({
  name: 'formValues',
  initialState,
  reducers: {
    addFormValue(state, action: PayloadAction<FormValue>) {
      const formValue = action.payload;
      state.formValues.push(formValue);
    },
    setLastAdded(state, action: PayloadAction<FormValue>) {
      const isLastAdded = action.payload;
      state.isLastAdded = isLastAdded ? false : true;
    },
  },
});

export const store = configureStore({
  reducer: {
    formValues: formSlice.reducer,
  },
});

setupListeners(store.dispatch);

export const { addFormValue } = formSlice.actions;
export const formValues = (state: RootState) => state.formValues.formValues;
export const countriesList = (state: RootState) => state.formValues.countries;
export const lastAdded = (state: RootState) => state.formValues.isLastAdded;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
