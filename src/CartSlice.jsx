import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newitem = action.payload;
      state.items.push(newitem);
      console.log(state.items);
    
    },
    removeItem: (state, action) => {
      const itemToRemove=action.payload
      state.items=state.items.filter(item=>item.name!==itemToRemove.name)
      console.log(state.items)
    },
    updateQuantity: (state, action) => {
      const {name,quantity}=action.payload
      const itemToUpdate=state.items.find(item=>item.name===name)
      itemToUpdate.quantity=quantity
      console.log(state.items)

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
