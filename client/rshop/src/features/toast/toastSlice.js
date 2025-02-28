import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toast: null,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.toast = action.payload;
    },
    removeToast: (state) => {
      state.toast = null;
    },
  },
});

export const { showToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
