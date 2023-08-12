import { configureStore } from "@reduxjs/toolkit";

import registroReducer from "./registroSlice";
import postReducer from "./postSlice";
import adsReducer from "./adsSlice";
import autoresReducer from "./autoresSlice";
import relatorioReducer from "./relatorioSlice";

export const store = configureStore({
  reducer: {
    registro: registroReducer,
    posts: postReducer,
    ads: adsReducer,
    autores: autoresReducer,
    relatorios: relatorioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
