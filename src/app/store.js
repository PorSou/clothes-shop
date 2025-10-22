// src/app/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import cartReducer from "../features/cart/cartSlice";
import favoriteReducer from "../features/favorite/favoriteSlice";
import authReducer from "../features/auth/authSlice";
import themeReducer from "../features/theme/themeSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  favorite: favoriteReducer,
  auth: authReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "favorite", "auth", "theme"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
