import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./viewNavBarSlice.js";

const appStore = configureStore({
  reducer: {
    viewNavBarSlice: navBarReducer,
  },
});

export default appStore;
