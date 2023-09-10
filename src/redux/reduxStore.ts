import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const reduxStore = configureStore({ reducer: rootReducer });

export type ReduxStoreType = ReturnType<typeof reduxStore.getState>;