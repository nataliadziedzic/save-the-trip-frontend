import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthedUser } from '../../types'

const initialState = { username: null, id: null } as AuthedUser

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthedUser>) {
      state.username = action.payload.username
      state.id = action.payload.id
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
