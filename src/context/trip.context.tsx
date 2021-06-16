import React from 'react'
import { getTrips } from '../api/trips.api'
import { ITrip } from '../types'

interface TripsContextValue {
  trips: ITrip[]
  fetchTrips: (id: number) => void
}
interface FindTripContextValue {
  trip: ITrip | null
  findTrip: (id: number) => void
}

export const TripsContext = React.createContext<TripsContextValue>(null!)
export const FindTripContext = React.createContext<FindTripContextValue>(null!)

export const useTripContext = () => {
  return React.useContext(TripsContext)
}
export const useFindTripContext = () => {
  return React.useContext(FindTripContext)
}

export interface TripsContextProviderProps {
  children: React.ReactNode
}

const TripsContextProvider: React.FC<TripsContextProviderProps> = ({ children }) => {
  const [trips, setTrips] = React.useState<ITrip[]>([])
  const [trip, setTrip] = React.useState<ITrip | null>(null)

  const fetchTrips = (userId: number) => {
    if (userId) {
      setTrips([])
      getTrips(userId, setTrips)
    }
  }
  const findTrip = (id: number) => {
    if (trips.length > 0) {
      const singleTrip = trips.find(trip => trip.id === id)
      setTrip(singleTrip!)
    }
  }

  return (
    <TripsContext.Provider
      value={{
        trips,
        fetchTrips,
      }}
    >
      <FindTripContext.Provider value={{ trip, findTrip }}>{children}</FindTripContext.Provider>
    </TripsContext.Provider>
  )
}

export default TripsContextProvider
