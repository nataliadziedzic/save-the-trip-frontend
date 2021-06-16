import * as React from 'react'
import { format } from 'date-fns'
import { useIntl } from 'react-intl'
import { useAppSelector } from '../../redux/hooks'
import { UserTrips } from '../../types'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { getTrips } from '../../api/trips.api'
import { TripsContainer, Trip, StyledLink } from './TripsPanel.style'

export interface TripsPanelProps {}

const TripsPanel: React.FC<TripsPanelProps> = () => {
  const intl = useIntl()
  const user = useAppSelector(state => state.user)
  const [trips, setTrips] = React.useState<UserTrips | []>([])
  const [tripsDates, setTripsDates] = React.useState<string[]>([])

  React.useEffect(() => {
    getTrips(user.id!, setTrips)
  }, [user.id])

  React.useEffect(() => {
    setTripsDates([])
    if (trips.length > 0) {
      trips.forEach(trip => {
        const startDate = new Date(trip.start_date!)
        setTripsDates(state => [...state, format(startDate, 'dd-MM-yyyy')])
      })
    }
  }, [trips])

  return (
    <TripsContainer>
      <h1 className='heading'>{intl.formatMessage({ id: 'heading-my-trips' })}</h1>
      {trips.map((trip, index) => (
        <Trip key={trip.id}>
          <div className='tripTitle text'>
            <span className='boldText'>{intl.formatMessage({ id: 'title' })}</span>{' '}
            {trip.title?.length! > 20 ? trip.title?.slice(0, 20)! + '...' : trip.title}
          </div>
          <div className='tripDescription text'>
            <span className='boldText'>{intl.formatMessage({ id: 'description' })}</span>{' '}
            {trip.description?.length! > 20 ? trip.description?.slice(0, 20)! + '...' : trip.description}
          </div>
          <div className='tripStart text'>
            <span className='boldText'>Start:</span> {tripsDates[index]}
          </div>
          <StyledLink to={`/trip/${trip.title}/${trip.id}`}>
            <span>{intl.formatMessage({ id: 'see' })}</span>
            <ArrowForwardIosIcon />
          </StyledLink>
        </Trip>
      ))}
    </TripsContainer>
  )
}

export default TripsPanel
