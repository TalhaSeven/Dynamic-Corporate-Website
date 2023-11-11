import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  preferredLanguage: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      state.preferredLanguage = payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
