import { Character } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit/react';
import type { RootState } from './store';

export interface CharacterState {
  characterIds: number[];
  characters: Character[];
}

const initialState: CharacterState = {
  characterIds: [],
  characters: [],
};

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    addCharacter(state, action: PayloadAction<Character>) {
      const character = action.payload;
      state.characters.push(character);
      state.characterIds.push(character.id);
    },
    removeCharacter(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.characterIds = state.characterIds.filter((i) => i !== id);
      state.characters = state.characters.filter(
        (character) => character.id !== id
      );
    },
    removeAllCharacters(state) {
      state.characterIds = [];
      state.characters = [];
    },
  },
});

export const { addCharacter, removeCharacter, removeAllCharacters } =
  characterSlice.actions;
export const selectCharacters = (state: RootState) =>
  state.characters.characters;
export const selectCharacterIds = (state: RootState) =>
  state.characters.characterIds;

export default characterSlice.reducer;
