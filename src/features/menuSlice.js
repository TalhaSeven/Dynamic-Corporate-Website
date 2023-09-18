import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menu: [],
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
      setMenu:(state,action) =>{
        state.menu=action.payload
      }
  },
})

export const { setMenu} = menuSlice.actions

export default menuSlice.reducer
