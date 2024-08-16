import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { FormValue } from './interfaces';

export interface FormState {
  formValues: FormValue[];
}

const initialState: FormState = {
  formValues: [],
};

const formSlice = createSlice({
  name: 'formValues',
  initialState,
  reducers: {
    addFormValue(state, action: PayloadAction<FormValue>) {
      const formValue = action.payload;
      state.formValues.push(formValue);
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
