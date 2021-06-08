import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  username: string | null
  id: number | null
}

const initialState = { username: null, id: null } as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.username = action.payload.username
      state.id = action.payload.id
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
