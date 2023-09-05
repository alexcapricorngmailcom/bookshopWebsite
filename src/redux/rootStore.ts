import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export const rootStore = configureStore({ reducer: rootReducer });

export type RootStoreType = ReturnType<typeof rootStore.getState>;