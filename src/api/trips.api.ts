import { dispatchError, dispatchSuccess } from '../commonFunctions/handleSnackbars'
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

interface ITripToUpdate {
  title?: string
  description?: string
  start_date?: string
}

export const updateTrip = async (id: number, body: ITripToUpdate) => {
  try {
    await axiosInstance.patch(`/trip/${id}`, body)
    dispatchSuccess()
  } catch (error) {
    console.log(error.message)
    dispatchError()
  }
}
