import { IDocuments } from '../types'
import { axiosInstance } from './axiosConfig'

export const getDocuments = async (tripId: number, setDocuments: (documents: IDocuments) => void) => {
  try {
    const response = await axiosInstance.get(`/documents/${tripId}`)
    setDocuments(response.data)
  } catch (error) {
    console.log(error.message)
  }
}
