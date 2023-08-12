import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IRelatorio } from "@/types";

import relatorios from "@/mocks/files.json";

export interface IRelatorioState {
  relatorios: IRelatorio[];
}

const initialState: IRelatorioState = {
  relatorios,
};

const relatorioSlice = createSlice({
  name: "relatorio",
  initialState,
  reducers: {
    addRelatorio(state, action: PayloadAction<IRelatorio>) {
      state.relatorios.push(action.payload);
    },
  },
});

export const { addRelatorio } = relatorioSlice.actions;
export default relatorioSlice.reducer;
