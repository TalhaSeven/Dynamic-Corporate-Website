import {combineReducers, configureStore } from '@reduxjs/toolkit'
import apiReducer from '../features/ApiSlice'
import menuReducer from '../features/MenuSlice'
import languageReducer from '../features/LanguageSlice'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
    api:apiReducer,
    menu:menuReducer,
    lang:languageReducer
})

const persistConfig = {
  key:"root",
  storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
devTools: process.env.NODE_ENV !== "production",
})

export const persistor = persistStore(store);
