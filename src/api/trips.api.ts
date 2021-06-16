import { ITrip } from '../types'
import { axiosInstance } from './axiosConfig'

export const getTrips = async (userId: number, setTrips: (trips: ITrip[]) => void) => {
  try {
    const response = await axiosInstance.get(`/user/${userId}/trips`)
    setTrips(response.data)
  } catch (error) {
    console.log(error.message)
  }
}
