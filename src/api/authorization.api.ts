import axios from 'axios'
import { dispatchError } from '../commonFunctions/handleSnackbars'
import { AuthedUser } from '../types'
import { API_PATH } from '../variables'

export let accessToken = ''

const handleErrors = (error: any) => {
  if (error.response) {
    const { status } = error.response
    if (status === 404) {
      dispatchError('login-email-error')
    } else if (status === 401) {
      dispatchError('login-password-error')
    } else if (status === 409) {
      dispatchError('user-already-exist-error')
    } else dispatchError('default-error')
  }
}
const axiosAuthInstance = axios.create({
  baseURL: API_PATH,
  headers: { 'Content-Type': 'application/json' },
})

export const signUp = async (
  user: {
    username: string
    password: string
    email: string
  },
  action: (username: string, id: number) => void
) => {
  try {
    const response = await axiosAuthInstance.post(`/register`, user)
    action(response.data.username, response.data.id)
  } catch (error) {
    console.log(error.message)
    handleErrors(error)
  }
}

interface UserToAuth {
  email: string
  password: string
}

export const signIn = async (userToAuth: UserToAuth, setUser: (user: AuthedUser) => void) => {
  try {
    const response = await axiosAuthInstance.post('/login', userToAuth)
    const { username, id } = response.data.user
    setUser({ username, id })
    accessToken = response.data.user.accessToken
  } catch (error) {
    console.log(error.message)
    handleErrors(error)
  }
}
