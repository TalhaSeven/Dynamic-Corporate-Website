import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  menu: [],
  loading:false,
  error:false,
}

export  const getMenu=createAsyncThunk(
  "getMenu",  //?action types
   async () => {  //async  callback function
    const url="https://fuatmercan.com/kids/api/v1/menu.php?lang=en&token=frpQ8/CDUfTsNoUUkbL0121PkOOjWJ1eDOfkQd3lWz3n/ZY/zu28pvFTW34u7M8CTKAdaQeWkT42n1rMsw==588cb53f476e2e13cde27315433d124c"
      try {
        const {data} = await axios(url)
        console.log(data)
        return data
      } catch (error) {
        console.log(error)
      }
   }
   )
   
   

 const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
      // setMenu:(state,action) =>{
      //   state.menu=action.payload
      // }
  },
  extraReducers : (builder) => {
    builder.addCase(getMenu.pending, (state) =>{
      state.loading=true
    }).addCase(getMenu.fulfilled, (state, action)=>{
      state.loading=false
      state.menu = action.payload
    }).addCase(getMenu.rejected, (state, action) =>{
      state.loading=false
    })
  }
})

// Action creators are generated for each case reducer function
export const { 
  // setMenu
} = menuSlice.actions

export default menuSlice.reducer