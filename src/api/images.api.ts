import axios from 'axios'
import { dispatchError } from '../commonFunctions/handleSnackbars'
import { API_PATH } from '../variables'

export const axiosForFiles = axios.create({
  baseURL: API_PATH,
  headers: { 'Content-Type': 'multipart/form-data' },
})

export const postImage = async (image: File) => {
  const formData = new FormData()
  formData.append('image', image)
  try {
    const response = await axiosForFiles.post('/images', formData)
    return response.data.url
  } catch (error) {
    console.log(error.message)
    return dispatchError()
  }
}
