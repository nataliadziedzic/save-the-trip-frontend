export const showLoader = () => {
  const loadingEvent = new Event('loading')
  document.dispatchEvent(loadingEvent)
}
export const hideLoader = () => {
  const finishLoadingEvent = new Event('finishLoading')
  document.dispatchEvent(finishLoadingEvent)
}
