import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "liveChatSlice",
  initialState: {
    liveChatMessages: [],
  },
  reducers: {
    pushLiveComment: (state, actions) => {
      state.liveChatMessages.push(actions.payload);
      if (state.liveChatMessages.length > 200) {
        state.liveChatMessages.splice(0, 1);
      }
    },
  },
});

export const { pushLiveComment } = liveChatSlice.actions;
export default liveChatSlice.reducer;
