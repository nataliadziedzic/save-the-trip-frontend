import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './slices/language'
import userReducer from './slices/user'

const store = configureStore({
  reducer: {
    language: languageReducer,
    user: userReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
