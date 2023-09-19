import { configureStore } from '@reduxjs/toolkit'
import apiReducer from '../features/ApiSlice'
import menuReducer from '../features/MenuSlice'
import languageReducer from '../features/LanguageSlice'

export const store = configureStore({
  reducer: {
    api:apiReducer,
    menu:menuReducer,
    lang:languageReducer
  }
})