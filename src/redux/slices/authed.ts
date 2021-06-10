import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthedState {
  authed: boolean
}

const initialState = { authed: false } as AuthedState

const authedSlice = createSlice({
  name: 'authed',
  initialState,
  reducers: {
    setAuthed(state, action: PayloadAction<boolean>) {
      state.authed = action.payload
    },
  },
})

export const { setAuthed } = authedSlice.actions
export default authedSlice.reducer
