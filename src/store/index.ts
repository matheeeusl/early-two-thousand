import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";
import secretReducer from "./secretSlice";

import { postApi } from "./postApi";

export const store = configureStore({
  reducer: {
    secret: secretReducer,
    search: searchReducer,
    postApi: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
