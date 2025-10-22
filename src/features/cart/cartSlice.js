// ============================================
// UPDATED: src/features/cart/cartSlice.js
// ============================================

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array of cart items
    totalQuantity: 0, // Total number of items
  },
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
        state.totalQuantity += newItem.quantity || 1;
      } else {
        state.items.push({
          ...newItem,
          quantity: newItem.quantity || 1,
        });
        state.totalQuantity += newItem.quantity || 1;
      }
    },

    // Remove item from cart
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    // Update quantity (increase or decrease)
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (type === "increase") {
          existingItem.quantity++;
          state.totalQuantity++;
        } else if (type === "decrease" && existingItem.quantity > 1) {
          existingItem.quantity--;
          state.totalQuantity--;
        }
      }
    },

    // ✅ Clear the entire cart (used after checkout)
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
