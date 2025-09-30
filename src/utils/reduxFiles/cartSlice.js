import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Find the index of the existing item
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItemIndex !== -1) {
        // If the item exists, increase its quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      // Logic to decrease quantity or remove if quantity is 1
      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload
      );

      if (itemToRemoveIndex !== -1) {
        if (state.items[itemToRemoveIndex].quantity > 1) {
          state.items[itemToRemoveIndex].quantity -= 1;
        } else {
          // Remove the item completely
          state.items.splice(itemToRemoveIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
