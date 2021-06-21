export interface AuthedUser {
  username: string | null
  email: string | null
  id: number | null
}

export interface ITrip {
  id: number | null
  title: string | null
  description: string | null
  img: string | null
  user_id: number | null
  start_date: string | null
}
export interface IDocuments {
  id: number
  passport: boolean
  visa: boolean
  id_card: boolean
  eu_covid_certificate: boolean
  covid_pcr_test: boolean
  covid_antigen_test: boolean
  vaccination_certificate: boolean
  driving_licence: boolean
  trip_id: number
  user_id: number
  ehic: boolean
}
