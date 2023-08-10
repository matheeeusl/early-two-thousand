import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { AdProps } from "@/types";

import ads from "@/mocks/ads.json";

export interface AdState {
  ads: AdProps[];
}

const initialState: AdState = {
  ads,
};

const adSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    addAd(state, action: PayloadAction<AdProps>) {
      state.ads.push(action.payload);
    },
    removeAd(state, action: PayloadAction<string>) {
      state.ads = state.ads.filter((ad) => ad.id !== action.payload);
    },
    updateAd(state, action: PayloadAction<AdProps>) {
      const { id } = action.payload;
      const index = state.ads.findIndex((ad) => ad.id === id);
      state.ads[index] = action.payload;
    },
  },
});

export const { addAd, removeAd, updateAd } = adSlice.actions;
export default adSlice.reducer;
