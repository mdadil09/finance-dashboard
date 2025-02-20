/* eslint-disable no-unused-vars */
"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegister: (state, action) => {
      state.token = action.payload.token;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setRegister, setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
