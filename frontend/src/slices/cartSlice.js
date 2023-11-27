import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [] }

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

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
            //Calculate items price
            state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty))
            //Calculate shipping price
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
            //Calculate tax price
            state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
            //Calculate total price
            state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2)

            localStorage.setItem('cart', JSON.stringify(state))

        }
    }
})

export const { addItemToCart } = cartSlice.actions

export default cartSlice.reducer