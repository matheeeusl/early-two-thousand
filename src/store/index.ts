import { configureStore } from "@reduxjs/toolkit";

import registroReducer from "./registroSlice";
import postReducer from "./postSlice";
import adsReducer from "./adsSlice";

export const store = configureStore({
  reducer: {
    registro: registroReducer,
    posts: postReducer,
    ads: adsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
