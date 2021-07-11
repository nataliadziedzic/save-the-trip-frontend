export interface AuthedUser {
  username: string | null
  email: string | null
  id: number | null
}

export interface ITrip {
  id?: number | null
  title: string | null
  description: string | null
  img?: string | null
  user_id: number | null
  start_date: string | null
}
export interface IDocuments {
  id?: number
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
export interface IShoppingItem {
  id?: number | null
  title: string | null
  amount: number | null
  unit: string | null
  status?: string | null
  trip_id: number | null
  user_id: number | null
}
export enum ShoppingItemStatus {
  TO_BUY = 'TO_BUY',
  BOUGHT = 'BOUGHT',
}
export enum ShoppingItemUnit {
  KG = 'KG',
  PIECE = 'PIECE',
}
