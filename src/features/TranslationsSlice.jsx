import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTranslationsData = createAsyncThunk(
  "translations",
  async (lang, { rejectWithValue }) => {
    const token = process.env.REACT_APP_API_TOKEN;
    const url = `https://fuatmercan.com/kids/api/v1/translations.php?lang=${lang}&token=${token}`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return rejectWithValue("bir hata oluştu..");
    }
  }
);

const initialState = {
  translations: [],
  loading: false,
  error: "",
};

export const translationsSlice = createSlice({
  name: "translations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTranslationsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTranslationsData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.translations = payload;
      })
      .addCase(getTranslationsData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default translationsSlice.reducer;
