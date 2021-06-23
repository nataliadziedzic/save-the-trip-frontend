/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { format } from 'date-fns'
import { useIntl } from 'react-intl'
import { useAppSelector } from '../../redux/hooks'
import WorkIcon from '@material-ui/icons/Work'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { TripsContainer, Trip, StyledLink } from './TripsPanel.style'
import { useTripContext } from '../../context/trip.context'
import AddTripDialog from './AddTripDialog/AddTripDialog'
import AddDocsDialog from './AddDocsDialog/AddDocsDialog'
import DocumentsContextProvider from '../../context/documents.context'

const TripsPanel: React.FC = () => {
  const intl = useIntl()
  const user = useAppSelector(state => state.user)
  const tripsContext = useTripContext()
  const [tripsDates, setTripsDates] = React.useState<string[]>([])
  const [openTripDialog, setOpenTripDialog] = React.useState(false)
  const [openDocsDialog, setOpenDocsDialog] = React.useState(false)

  React.useEffect(() => {
    tripsContext.fetchTrips(user.id!)
  }, [user.id])

  React.useEffect(() => {
    setTripsDates([])
    if (tripsContext.trips.length > 0) {
      tripsContext.trips.forEach(trip => {
        const startDate = new Date(trip.start_date!)
        setTripsDates(state => [...state, format(startDate, 'dd-MM-yyyy')])
      })
    }
  }, [tripsContext.trips])

  return (
    <DocumentsContextProvider>
      <TripsContainer>
        <h1 className='heading'>
          {intl.formatMessage({ id: 'heading-my-trips' })} <WorkIcon />
        </h1>
        {tripsContext.trips.map((trip, index) => (
          <Trip key={trip.id}>
            <div className='tripTitle text'>
              <span className='boldText'>{intl.formatMessage({ id: 'title' })}</span>{' '}
              {trip.title?.length! > 30 ? trip.title?.slice(0, 30)! + '...' : trip.title}
            </div>
            <div className='tripDescription text'>
              <span className='boldText'>{intl.formatMessage({ id: 'description' })}</span>{' '}
              {trip.description?.length! > 25 ? trip.description?.slice(0, 25)! + '...' : trip.description}
            </div>
            <div className='tripStart text'>
              <span className='boldText'>Start:</span> {tripsDates[index]}
            </div>
            <StyledLink to={`/trip/${trip.title?.replace(/\s/g, '-').toLowerCase()}/${trip.id}`}>
              <span>{intl.formatMessage({ id: 'see' })}</span>
              <ArrowForwardIosIcon />
            </StyledLink>
          </Trip>
        ))}
        <div className='button outlinedButton' onClick={() => setOpenTripDialog(true)}>
          {intl.formatMessage({ id: 'add-trip' })}
        </div>
        <AddTripDialog
          open={openTripDialog}
          setOpen={setOpenTripDialog}
          userId={user.id!}
          setOpenDocumentsDialog={setOpenDocsDialog}
        />
        <AddDocsDialog open={openDocsDialog} setOpen={setOpenDocsDialog} userId={user.id!} />
      </TripsContainer>
    </DocumentsContextProvider>
  )
}

export default TripsPanel
