import { createSlice } from "@reduxjs/toolkit";
import { cartItemType } from "../../types/cartItem";

const initialState: CartStateType = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: { type: string; payload: cartItemType }) => {
            // state.cartItems.push(action.payload);
            state.cartItems = [...state.cartItems, action.payload];
        },
        removeItem: (state, action: { type: string; payload: cartItemType }) => {
            state.cartItems.find( (cartItem, index) => (
                cartItem.id === action.payload.id && state.cartItems.splice(index, 1)
            ))
        }
    }
})

type CartStateType = {
    cartItems: cartItemType[]
}