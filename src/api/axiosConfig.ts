import axios from 'axios'
import { API_PATH } from '../variables'

export const axiosInstance = axios.create({
  baseURL: API_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
})
