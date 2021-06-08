import axios from 'axios'
import { API_PATH } from '../variables'

export const signUp = async (
  user: {
    username: string
    password: string
    email: string
  },
  action: (username: string, id: number) => void
) => {
  try {
    const response = await axios.post(`${API_PATH}/register`, user, {
      headers: { 'Content-Type': 'application/json' },
    })
    action(response.data.username, response.data.id)
  } catch (error) {
    console.log(error.message)
  }
}
