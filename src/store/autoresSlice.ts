import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Autor } from "@/types";

import autores from "@/mocks/autores.json";

export interface AutoresState {
  autores: Autor[];
}

const initialState: AutoresState = {
  autores,
};

const autoresSlice = createSlice({
  name: "autores",
  initialState,
  reducers: {
    addAutor(state, action: PayloadAction<Autor>) {
      state.autores.push(action.payload);
    },
    removeAutor(state, action: PayloadAction<number>) {
      state.autores = state.autores.filter(
        (autor) => autor.id.toString() !== action.payload.toString()
      );
    },
    updateAutor(state, action: PayloadAction<Autor>) {
      const index = state.autores.findIndex(
        (autor) => autor.id === action.payload.id
      );
      state.autores[index] = action.payload;
    },
  },
});

export const { addAutor, removeAutor, updateAutor } = autoresSlice.actions;
export default autoresSlice.reducer;
