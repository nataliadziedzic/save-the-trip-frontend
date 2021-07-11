import { axiosInstance } from './axiosConfig'
import { AuthedUser } from '../types'
import { dispatchError } from '../commonFunctions/handleSnackbars'

export const updatePreferredLanguage = async (
  user: AuthedUser,
  language: { preferredLanguage: 'pl' | 'en' },
  setUserLanguage: () => void
) => {
  try {
    await axiosInstance.patch(`/preferred-language/${user.id}`, language)
    setUserLanguage()
  } catch (error) {
    console.log(error.message)
    dispatchError('default-error')
  }
}
