import { createSlice } from "@reduxjs/toolkit";

const viewNavBarSlice = createSlice({
  name: "viewNavBarSlice",
  initialState: {
    visible: true,
  },
  reducers: {
    toogleNavBar: (state) => {
      state.visible = !state.visible;
    },
    hideNavBar: (state) => {
      state.visible = false;
    },
    showNavBar: (state) => {
      state.visible = true;
    },
  },
});

export const { toogleNavBar, hideNavBar, showNavBar } = viewNavBarSlice.actions;
export default viewNavBarSlice.reducer;
