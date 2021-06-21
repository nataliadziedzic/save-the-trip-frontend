export const API_PATH = process.env.REACT_APP_API_PATH
export const notificationTime = 4000
export const emailValidation = /^\w[\w._+-]+[^.]+@([\w-]+\.)+[\w]{2,4}$/
export const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\\[\]{}\\(\\)?\-“!@#%&\\/,><\\’:;|_~`]*)\S{8,99}$/
export const documentsTypes = {
  PASSPORT: 'passport',
  VISA: 'visa',
  ID_CARD: 'id_card',
  EU_COVID_CERTIFICATE: 'eu_covid_certificate',
  COVID_PCR_TEST: 'covid_pcr_test',
  COVID_ANTIGEN_TEST: 'covid_antigen_test',
  VACCINATION_CERTIFICATE: 'vaccination_certificate',
  DRIVING_LICENCE: 'driving_licence',
  EHIC: 'ehic',
}
