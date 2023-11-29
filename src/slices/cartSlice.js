import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from '../utils/cartSliceUtils';

const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : { cartItems: [], shippingAdress: {}, PaymentMethod: 'PayPal' }



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item._id === newItem._id);

            if (existingItem) {
                state.cartItems = state.cartItems.map((item) => item._id === existingItem._id ? newItem : item)
            } else {
                state.cartItems = [...state.cartItems, newItem]
            }

            return updateCart(state)
        },
         removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload)
            return updateCart(state)
        },
        saveShippingAddress(state, action) {
            state.shippingAdress = action.payload;
            return updateCart(state)
        }
    }
})

export const { addItemToCart, removeItemFromCart,saveShippingAddress } = cartSlice.actions

export default cartSlice.reducer