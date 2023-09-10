import { ReduxStoreType } from "./reduxStore";

export const getCartItems = (store: ReduxStoreType) => store.cart.cartItems;