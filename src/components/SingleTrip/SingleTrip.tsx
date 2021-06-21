/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useFindTripContext } from '../../context/trip.context'
import { TripContainer } from './SingleTrip.style'
import TopSection from './TopSection/TopSection'

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
      <div className='listsContainer'>Shopping list: Documents:</div>
    </TripContainer>
  )
}

export default SingleTrip
