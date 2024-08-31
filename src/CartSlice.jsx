import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem){
            existingItem.quantity++;
        } else {
            const costInt = parseInt(cost.substring(1));
            state.items.push({name, image, cost:costInt, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem  && quantity > 0){
            existingItem.quantity = quantity;
        } else {
            state.items = state.items.filter(item => item.name !== name);   
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
