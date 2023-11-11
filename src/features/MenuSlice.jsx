import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMenuData = createAsyncThunk(
  "menu",
  async (lang, { rejectWithValue }) => {
    const token = process.env.REACT_APP_API_TOKEN;
    const url = `https://fuatmercan.com/kids/api/v1/menu.php?lang=${lang}&token=${token}`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      return rejectWithValue("bir hata oluştu..");
    }
  }
);

const initialState = {
  menu: [],
  loading: false,
  error: "",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMenuData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMenuData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.menu = payload;
      })
      .addCase(getMenuData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default menuSlice.reducer;
