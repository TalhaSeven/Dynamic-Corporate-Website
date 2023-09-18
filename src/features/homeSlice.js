import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pageData: [],
  loading: false,
  error: false,
};

export const homeAll = createAsyncThunk(
  "homeAll",
  async (thunkAPI, { rejectWithValue }) => {
    const url =
      "https://fuatmercan.com/kids/api/v1/page.php?slug=index&lang=en&token=frpQ8/CDUfTsNoUUkbL0121PkOOjWJ1eDOfkQd3lWz3n/ZY/zu28pvFTW34u7M8CTKAdaQeWkT42n1rMsw==588cb53f476e2e13cde27315433d124c";
    try {
      const { data } = await axios(url);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue("SORUN OLUSTU");
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(homeAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(homeAll.fulfilled, (state, action) => {
        state.pageData = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(homeAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
// export const {  } = homeSlice.actions;

export default homeSlice.reducer;
