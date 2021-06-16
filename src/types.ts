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
