import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSiteData = createAsyncThunk(
  "site",
  async ({ rejectWithValue }) => {
    const token = process.env.REACT_APP_API_TOKEN;
    const url = `https://fuatmercan.com/kids/api/v1/site.php?token=${token}`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return rejectWithValue("bir hata oluştu..");
    }
  }
);

const initialState = {
  site: [],
  loading: false,
  error: "",
};

export const siteSlice = createSlice({
  name: "site",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSiteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSiteData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.site = payload;
      })
      .addCase(getSiteData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default siteSlice.reducer;
