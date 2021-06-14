import * as React from 'react'
import { getTrips } from '../../api/trips.api'
import { useAppSelector } from '../../redux/hooks'
import { UserTrips } from '../../types'

export interface TripsPanelProps {}

const TripsPanel: React.FC<TripsPanelProps> = () => {
  const user = useAppSelector(state => state.user)
  const [trips, setTrips] = React.useState<UserTrips | []>([])

  React.useEffect(() => {
    getTrips(user.id!, setTrips)
  }, [user.id])

  return (
    <div>
      PANEL {user.username}
      {trips.map(trip => (
        <div key={trip.id}>TRIP: {trip.title}</div>
      ))}
    </div>
  )
}

export default TripsPanel
