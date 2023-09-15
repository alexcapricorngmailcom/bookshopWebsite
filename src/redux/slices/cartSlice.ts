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
        removeItem: (state, action: { type: string; payload: cartItemIdType }) => {
            const filteredCartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            state.cartItems = filteredCartItems;
        }
    }
})

type CartStateType = {
    cartItems: cartItemType[]
}