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
  img?: string
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
export const createTrip = async (
  body: ITrip,
  setDocumentsId: (id: number) => void,
  setTripId: (id: number) => void,
  updateTripsInPanel: (trip: ITrip) => void
) => {
  try {
    const response = await axiosInstance.post('/trips', body)
    const { trip, documents_list_id } = response.data
    setDocumentsId(documents_list_id)
    setTripId(trip.id)
    updateTripsInPanel(trip)
    dispatchSuccess('create-trip-success')
  } catch (error) {
    console.log(error.message)
    dispatchError()
  }
}

export const deleteTrip = async (id: number, updateState: () => void) => {
  try {
    await axiosInstance.delete(`/trip/${id}`)
    updateState()
    dispatchSuccess('delete-success')
  } catch (error) {
    console.log(error.message)
    dispatchError('delete-error')
  }
}
