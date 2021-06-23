import { axiosInstance } from './axiosConfig'
import { IDocuments } from '../types'
import { dispatchError, dispatchSuccess } from '../commonFunctions/handleSnackbars'

export const getDocuments = async (tripId: number, setDocuments: (documents: IDocuments) => void) => {
  try {
    const response = await axiosInstance.get(`/documents/${tripId}`)
    setDocuments(response.data)
  } catch (error) {
    console.log(error.message)
  }
}
export const addDocuments = async (id: number, documents: IDocuments, closeEditMode: () => void) => {
  try {
    await axiosInstance.put(`/documents/${id}`, documents)
    dispatchSuccess('add-documents-success')
    closeEditMode()
  } catch (error) {
    console.log(error.message)
    dispatchError()
  }
}
