import { Character } from '@/src/interfaces/api-types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';
import type { RootState } from './store';

export interface CharacterState {
  characters: Character[];
}

const initialState: CharacterState = {
  characters: [],
};

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacter(state, action: PayloadAction<Character>) {
      const character = action.payload;
      state.characters.push(character);
    },
    removeCharacter(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.characters = state.characters.filter(
        (character) => character.id !== id
      );
    },
    removeAllCharacters(state) {
      state.characters = [];
    },
  },
});

export const { addCharacter, removeCharacter, removeAllCharacters } =
  characterSlice.actions;
export const selectCharacters = (state: RootState) =>
  state.characters.characters;

export default characterSlice.reducer;
