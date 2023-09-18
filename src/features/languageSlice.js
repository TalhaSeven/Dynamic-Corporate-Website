import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  langData: [],
  loading: false,
  error: false,
}


export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {},

})

// Action creators are generated for each case reducer function
export const {} = languageSlice.actions

export default languageSlice.reducer
