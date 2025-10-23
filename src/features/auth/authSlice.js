import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // store logged-in user data
  token: null, // optional if you use JWT
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token || null;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    updateProfileImage: (state, action) => {
      if (state.user) {
        state.user.image = action.payload;
      }
    },
  },
});

export const { loginSuccess, logout, updateProfileImage } = authSlice.actions;
export default authSlice.reducer;
