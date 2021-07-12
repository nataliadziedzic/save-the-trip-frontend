import axios from 'axios'
import { hideLoader, showLoader } from '../commonFunctions/handleLoader'
import { dispatchError, dispatchSuccess } from '../commonFunctions/handleSnackbars'
import { AuthedUser } from '../types'
import { API_PATH } from '../variables'
import { axiosInstance } from './axiosConfig'
import { axiosForFiles } from './images.api'

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

axiosAuthInstance.interceptors.request.use(function (config) {
  showLoader()
  return config
})
axiosAuthInstance.interceptors.response.use(
  function (response) {
    hideLoader()
    return response
  },
  function (error) {
    hideLoader()
    return Promise.reject(error)
  }
)

export const signUp = async (
  user: {
    username: string
    password: string
    email: string
  },
  action: (username: string, id: number, email: string) => void
) => {
  try {
    const response = await axiosAuthInstance.post(`/register`, user)
    const { username, id, email } = response.data
    action(username, id, email)
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
    const { username, id, email, preferredLanguage } = response.data.user
    localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken))
    localStorage.setItem('refreshToken', JSON.stringify(response.data.refreshToken))
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
    axiosForFiles.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
    return setUser({ username, id, email, preferredLanguage })
  } catch (error) {
    console.log(error.message)
    handleErrors(error)
  }
}
export const setNewToken = async (setUser: (user: AuthedUser) => void, loaded: (isLoaded: boolean) => void) => {
  const refreshToken = localStorage.getItem('refreshToken') ? JSON.parse(localStorage.getItem('refreshToken')!) : null
  try {
    if (refreshToken) {
      const response = await axiosAuthInstance.post('/refresh', { refreshToken })
      const { username, id, email, preferredLanguage } = response.data
      localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken))
      setUser({ username, id, email, preferredLanguage })
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
      axiosForFiles.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
      loaded(true)
    } else {
      loaded(true)
    }
  } catch (error) {
    console.log(error.message)
    dispatchError('session-expired')
    loaded(true)
  }
}

export const signOut = async (id: number, action: () => void) => {
  try {
    await axiosAuthInstance.get(`/logout/${id}`)
    action()
    dispatchSuccess('logout-success')
  } catch (error) {
    console.log(error.message)
    dispatchError('default-error')
  }
}
