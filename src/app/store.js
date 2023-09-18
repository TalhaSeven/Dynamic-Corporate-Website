import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import homeReducer from '../features/homeSlice'
import menuReducer from "../features/menuSlice"
import languageReducer from '../features/languageSlice'
=======
import apiReducer from '../features/ApiSlice'
import menuReducer from '../features/MenuSlice'
import languageReducer from '../features/LanguageSlice'
>>>>>>> main

 const store = configureStore({
  reducer: {
    api:apiReducer,
    menu:menuReducer,
<<<<<<< HEAD
    language:languageReducer,
  },
})
export default store;
=======
    lang:languageReducer
  }
})
>>>>>>> main
