import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const {  } = HomeSlice.actions

export default HomeSlice.reducer