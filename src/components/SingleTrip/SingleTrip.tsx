/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useFindTripContext } from '../../context/trip.context'
import TopSection from './TopSection/TopSection'
import ShoppingList from './ShoppingList/ShoppingList'
import DocumentsList from './DocumentsList/DocumentsList'
import { TripContainer } from './SingleTrip.style'

const SingleTrip: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const findTripContext = useFindTripContext()

  React.useEffect(() => {
    if (id) {
      findTripContext.findTrip(+id!)
    }
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
