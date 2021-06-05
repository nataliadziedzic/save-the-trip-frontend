import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import englishMessages from '../languages/en.json'

interface LanguageState {
  language: typeof englishMessages
}

const initialState = { language: englishMessages } as LanguageState

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<typeof englishMessages>) {
      state.language = action.payload
    },
  },
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer
