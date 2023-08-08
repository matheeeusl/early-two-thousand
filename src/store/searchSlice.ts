import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPost } from "@/types";

export interface SearchState {
  search: string;
  startupPost: IPost[];
}

const initialState: SearchState = {
  search: "",
  startupPost: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setStartupPost(state, action: PayloadAction<IPost[]>) {
      state.startupPost = action.payload;
    },
  },
});

export const { setSearch, setStartupPost } = searchSlice.actions;
export default searchSlice.reducer;
