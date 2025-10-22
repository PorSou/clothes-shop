// src/features/favorite/favoriteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
    totalFavorites: 0,
  },
  reducers: {
    addToFavorite: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existing) {
        state.items.push(action.payload);
        state.totalFavorites += 1;
      }
    },
    removeFromFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalFavorites = state.items.length;
    },
    clearFavorites: (state) => {
      state.items = [];
      state.totalFavorites = 0;
    },
  },
});

export const { addToFavorite, removeFromFavorite, clearFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
