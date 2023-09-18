import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMenuData = createAsyncThunk(
  "menu",
  async (lang,{rejectWithValue}) => {
    const token = "frpQ8/CDUfTsNoUUkbL0121PkOOjWJ1eDOfkQd3lWz3n/ZY/zu28pvFTW34u7M8CTKAdaQeWkT42n1rMsw==588cb53f476e2e13cde27315433d124c"
    const url = `https://fuatmercan.com/kids/api/v1/menu.php?lang=${lang}&token=${token}`
    try {
      const {data} = await axios(url)
      return data
    } catch (error) {
      console.log(error);
      return rejectWithValue("bir hata oluştu..")
    }
  }
)


const initialState = {
  menu:[],
  loading:false,
  error:false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getMenuData.pending, (state)=>{
      state.loading = true;
    })
    .addCase(getMenuData.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.menu = payload;
    })
    .addCase(getMenuData.rejected, (state, {payload})=>{
      state.loading=false;
      state.error = payload;
    })
  }

})



export default menuSlice.reducer