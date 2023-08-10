import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IRegistro } from "@/types";

import registros from "@/mocks/registros.json";

export interface RegistroState {
  registros: IRegistro[];
}

const initialState: RegistroState = {
  registros,
};

const registroSlice = createSlice({
  name: "registros",
  initialState,
  reducers: {
    addRegistro(state, action: PayloadAction<IRegistro>) {
      state.registros.push(action.payload);
    },
    removeRegistro(state, action: PayloadAction<string>) {
      state.registros = state.registros.filter(
        (registro) => registro.data !== action.payload
      );
    },
    updateRegistro(state, action: PayloadAction<IRegistro>) {
      const registro = state.registros.find(
        (registro) => registro.data === action.payload.data
      );
      if (registro) {
        registro.conteudo = action.payload.conteudo;
      }
    },
  },
});

export const { addRegistro, removeRegistro, updateRegistro } =
  registroSlice.actions;
export default registroSlice.reducer;
