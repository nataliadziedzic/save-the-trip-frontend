/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useFindTripContext } from '../../context/trip.context'
import { TripContainer, TopSection } from './SingleTrip.style'

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
      <TopSection>
        <div className='imageContainer'></div>
        <div className='titleContainer'>
          <h1>{findTripContext.trip?.title}</h1>
        </div>
      </TopSection>
    </TripContainer>
  )
}

export default SingleTrip
