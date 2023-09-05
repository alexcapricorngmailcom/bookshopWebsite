import { createSlice } from "@reduxjs/toolkit";
import { storeItemType } from "../../types/storeItem";


const initialState: StoresItemsState = {
    storesItems: [],
}

export const storesItemsSlice = createSlice({
    name: 'storesItems',
    initialState,
    reducers: {
        addItem: (state, action: { type: string; payload: storeItemType }) => {
            state.storesItems = [...state.storesItems, action.payload];
        }
    }
})

type StoresItemsState = {
    storesItems: storeItemType[]
}