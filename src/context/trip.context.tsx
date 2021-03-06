import React from 'react'
import { getSingleTrip, getTrips } from '../api/trips.api'
import { ITrip } from '../types'

interface TripsContextValue {
  trips: ITrip[]
  fetchTrips: (id: number) => void
  updateTrips: (trip: ITrip) => void
  deleteTripFromArray: (id: number) => void
}
interface FindTripContextValue {
  trip: ITrip | null
  findTrip: (userId: number, id: number) => void
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
  const findTrip = (userId: number, id: number) => {
    if (trips.length > 0) {
      const singleTrip = trips.find(trip => trip.id === id)
      setTrip(singleTrip!)
    } else {
      getSingleTrip(userId, id, setTrip)
    }
  }
  const updateTrips = (trip: ITrip) => {
    setTrips(state => [...state, trip])
  }
  const deleteTripFromArray = (id: number) => {
    setTrips(trips.filter(trip => trip.id !== id))
  }

  return (
    <TripsContext.Provider
      value={{
        trips,
        fetchTrips,
        updateTrips,
        deleteTripFromArray,
      }}
    >
      <FindTripContext.Provider value={{ trip, findTrip }}>{children}</FindTripContext.Provider>
    </TripsContext.Provider>
  )
}

export default TripsContextProvider
