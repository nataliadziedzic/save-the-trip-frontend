import axios from 'axios'
import { API_PATH } from '../variables'
import { hideLoader, showLoader } from '../commonFunctions/handleLoader'

export const axiosInstance = axios.create({
  baseURL: API_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
})
axiosInstance.interceptors.request.use(function (config) {
  showLoader()
  return config
})
axiosInstance.interceptors.response.use(
  function (response) {
    hideLoader()
    return response
  },
  function (error) {
    hideLoader()
    return Promise.reject(error)
  }
)
