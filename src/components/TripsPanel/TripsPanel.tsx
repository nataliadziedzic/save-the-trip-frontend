import * as React from 'react'
import { useAppSelector } from '../../redux/hooks'

export interface TripsPanelProps {}

const TripsPanel: React.FC<TripsPanelProps> = () => {
  const user = useAppSelector(state => state.user)

  return <div>PANEL {user.username}</div>
}

export default TripsPanel
