export const dispatchError = (messageId?: string) => {
  const errorSnackbar = document.querySelector('.errorSnackbar')
  const errorEvent = new CustomEvent('error', {
    detail: { messageId },
  })
  return errorSnackbar!.dispatchEvent(errorEvent)
}
export const dispatchSuccess = (messageId?: string) => {
  const successSnackbar = document.querySelector('.successSnackbar')
  const successEvent = new CustomEvent('success', {
    detail: { messageId },
  })
  return successSnackbar!.dispatchEvent(successEvent)
}
export const dispatchWarning = (messageId: string) => {
  const warningSnackbar = document.querySelector('.warningSnackbar')
  const warningEvent = new CustomEvent('warning', {
    detail: { messageId },
  })
  return warningSnackbar!.dispatchEvent(warningEvent)
}

export const displayMessage = (
  event: CustomEvent,
  setState: (arg: boolean) => void,
  setMessage: (arg: string) => void
) => {
  setState(true)
  setMessage(event.detail.messageId)
}
export const isCustomEvent = (event: Event): event is CustomEvent => {
  return 'detail' in event
}
