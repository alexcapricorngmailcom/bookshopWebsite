import { createSlice } from "@reduxjs/toolkit";
import { cartItemType } from "../../types/cartItem";
import { cartItemIdType } from "../../types/cartItemId";

const initialState: CartStateType = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: { type: string; payload: cartItemType }) => {
            // state.cartItems.push(action.payload);
            const findCartItem = state.cartItems.find((cartItem) => (
                cartItem.id === action.payload.id

            ))
            !findCartItem && (state.cartItems = [...state.cartItems, action.payload]) 
        },
        removeItem: (state, action: { type: string; payload: cartItemIdType }) => {
            const filteredCartItems = state.cartItems.filter(cartItem => (
                cartItem.id !== action.payload.id
            ))
            state.cartItems = filteredCartItems;
        }
    }
})

type CartStateType = {
    cartItems: cartItemType[]
}