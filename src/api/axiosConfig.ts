import axios from 'axios'
import { API_PATH } from '../variables'
import { accessToken } from './authorization.api'

export const axiosInstance = axios.create({
  baseURL: API_PATH,
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
})
