import { configureStore } from "@reduxjs/toolkit";

import characterReducer, { ICharacterSlice } from "./slices/Character";

export interface IReducers {
  character: ICharacterSlice;
}

const reducer = {
  character: characterReducer,
};

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;
