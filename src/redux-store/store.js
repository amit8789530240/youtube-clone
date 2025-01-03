import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./viewNavBarSlice.js";
import liveChatReducer from "./liveChatSlice.js";

const appStore = configureStore({
  reducer: {
    viewNavBarSlice: navBarReducer,
    liveChatSlice: liveChatReducer,
  },
});

export default appStore;
