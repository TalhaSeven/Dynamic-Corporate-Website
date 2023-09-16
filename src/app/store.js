import { configureStore } from '@reduxjs/toolkit'
import homeReducer from '../features/homeSlice'
import menuReducer from "../features/menuSlice"
import languageReducer from '../features/languageSlice'

 const store = configureStore({
  reducer: {
    home:homeReducer,
    menu:menuReducer,
    language:languageReducer,
  },
})
export default store;