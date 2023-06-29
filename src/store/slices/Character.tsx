import { createSlice } from "@reduxjs/toolkit";
import { ICharacter, IInfo } from "src/types";

export interface ICharacterSlice {
  characters: ICharacter[];
  character: ICharacter;
  info: IInfo;
  loading: boolean;
}

const initialState: ICharacterSlice = {
  characters: [],
  character: {},
  info: {
    pages: 0,
    count: 0,
    next: null,
    prev: null,
  },
  loading: false,
};

const CharacterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setCharacters(state, action) {
      state.characters = action.payload;
    },
    setCharacter(state, action) {
      state.character = action.payload;
    },
    setInfo(state, action) {
      state.info = action.payload;
    },
  },
});

export const { setLoading, setCharacters, setCharacter, setInfo } =
  CharacterSlice.actions;
export default CharacterSlice.reducer;
