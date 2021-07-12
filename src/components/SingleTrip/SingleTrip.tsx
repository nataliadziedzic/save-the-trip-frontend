/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useFindTripContext } from '../../context/trip.context'
import TopSection from './TopSection/TopSection'
import ShoppingList from './ShoppingList/ShoppingList'
import DocumentsList from './DocumentsList/DocumentsList'
import { TripContainer } from './SingleTrip.style'
import { useAppSelector } from '../../redux/hooks'
import { dispatchError } from '../../commonFunctions/handleSnackbars'

const SingleTrip: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const user = useAppSelector(state => state.user)
  const findTripContext = useFindTripContext()

  React.useEffect(() => {
    if (id && user.id) {
      findTripContext.findTrip(user.id, +id!)
    } else dispatchError()
  }, [id])

  return (
    <TripContainer>
      <TopSection trip={findTripContext.trip!} />
      <div className='listsContainer'>
        <ShoppingList trip={findTripContext.trip!} />
        <DocumentsList trip={findTripContext.trip!} />
      </div>
    </TripContainer>
  )
}

export default SingleTrip
