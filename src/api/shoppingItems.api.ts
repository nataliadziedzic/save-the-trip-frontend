import { axiosInstance } from './axiosConfig'
import { dispatchError, dispatchSuccess } from '../commonFunctions/handleSnackbars'
import { IShoppingItem } from '../types'

export const getShoppingItems = async (tripId: number, setItems: (items: IShoppingItem[]) => void) => {
  try {
    const response = await axiosInstance.get(`/shopping-item/${tripId}`)
    setItems(response.data)
  } catch (error) {
    console.log(error.message)
    dispatchError('default-error')
  }
}

export const addShoppingItem = async (
  body: IShoppingItem,
  setItems: (items: any) => void,
  closeDialog: () => void,
  clearInputs: () => void
) => {
  try {
    const response = await axiosInstance.post('/shopping-item', body)
    setItems((state: any) => [...state, response.data])
    closeDialog()
    clearInputs()
    dispatchSuccess('create-item-success')
  } catch (error) {
    console.log(error.message)
    dispatchError('default-error')
  }
}

export const updateShoppingItem = async (body: IShoppingItem, setItem: () => void, closeDialog: () => void) => {
  try {
    await axiosInstance.put(`/shopping-item`, body)
    dispatchSuccess()
    setItem()
    closeDialog()
  } catch (error) {
    console.log(error.message)
    dispatchError('default-error')
  }
}
export const updateItemStatus = async (id: number, status: { status: 'TO_BUY' } | { status: 'BOUGHT' }) => {
  try {
    await axiosInstance.patch(`/shopping-item/${id}`, status)
  } catch (error) {
    console.log(error.message)
    dispatchError('default-error')
  }
}

export const deleteShoppingItem = async (id: number, updateState: () => void) => {
  try {
    await axiosInstance.delete(`/shopping-item/${id}`)
    updateState()
    dispatchSuccess('delete-success')
  } catch (error) {
    console.log(error.message)
    dispatchError('delete-error')
  }
}
