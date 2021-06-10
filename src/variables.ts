export const API_PATH = process.env.REACT_APP_API_PATH
export const notificationTime = 4000
export const emailValidation = /^\w[\w._+-]+[^.]+@([\w-]+\.)+[\w]{2,4}$/
export const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\\[\]{}\\(\\)?\-“!@#%&\\/,><\\’:;|_~`]*)\S{8,99}$/
