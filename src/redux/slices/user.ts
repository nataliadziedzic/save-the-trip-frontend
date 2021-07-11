import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthedUser } from '../../types'
import { logout } from './authed'

const initialState = { username: null, id: null, email: null, preferredLanguage: null } as AuthedUser

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthedUser>) {
      state.username = action.payload.username
      state.id = action.payload.id
      state.email = action.payload.email
      state.preferredLanguage = action.payload.preferredLanguage
    },
    setUserLanguage(state, action: PayloadAction<'pl' | 'en'>) {
      state.preferredLanguage = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(logout, state => {
      state.username = null
      state.id = null
      state.email = null
      state.preferredLanguage = null
    })
  },
})

export const { setUser, setUserLanguage } = userSlice.actions
export default userSlice.reducer
