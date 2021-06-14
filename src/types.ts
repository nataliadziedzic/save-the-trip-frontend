export interface AuthedUser {
  username: string | null
  id: number | null
}

export type UserTrips = [
  {
    id: number | null
    title: string | null
    description: string | null
    img: string | null
    user_id: number | null
    start_date: string | null
  }
]
