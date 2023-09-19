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
            const findCartItem = state.cartItems.find((cartItem) => (
                cartItem.id === action.payload.id
            ))
            
            if (!findCartItem) {
                state.cartItems = [...state.cartItems, action.payload];
            } else {
                const index = state.cartItems.indexOf(findCartItem);
                state.cartItems[index].quantity = findCartItem.quantity + action.payload.quantity;
            }
        },
        updateItemQuantity: (state, action: { type: string; payload: cartItemType }) => {
            const index = state.cartItems.findIndex((cartItem) => (
                cartItem.id === action.payload.id
            ))
            state.cartItems[index] = action.payload
            
        },
        removeItem: (state, action: { type: string; payload: string }) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload)
        }
    }
})

type CartStateType = {
    cartItems: cartItemType[]
}