import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SecretState {
  isOpen: boolean;
}

const initialState: SecretState = {
  isOpen: false,
};

const secretSlice = createSlice({
  name: "secret",
  initialState,
  reducers: {
    setSecret(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { setSecret } = secretSlice.actions;
export default secretSlice.reducer;
