import * as React from 'react'
import { useIntl } from 'react-intl'

import { updateTrip } from '../../../api/trips.api'
import { postImage } from '../../../api/images.api'
import { API_PATH } from '../../../variables'
import { ITrip } from '../../../types'
import palmTree from '../../../assets/images/palm-tree.jpg'

import TripTitle from './TripTitle'
import TripDescription from './TripDescription'
import TripStartDate from './TripStartDate'
import DeleteTrip from '../../DeleteTrip/DeleteTrip'
import { ImageContainer, StyledSection } from './TopSection.style'

export interface TopSectionProps {
  trip: ITrip
}

const TopSection: React.FC<TopSectionProps> = ({ trip }) => {
  const intl = useIntl()

  const [imageUrl, setImageUrl] = React.useState<string | null>(null)

  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    else if (event.target.files[0]) {
      const url: string = await postImage(event.target.files[0])
      await updateTrip(trip.id!, { img: url })
      setImageUrl(url)
    }
  }

  React.useEffect(() => {
    if (trip?.img) {
      setImageUrl(trip.img)
    }
  }, [trip])

  return (
    <StyledSection>
      <div className='wrapper'>
        <ImageContainer>
          <input
            style={{ display: 'none' }}
            accept='image/*'
            id={`updateTripImg${trip?.id}`}
            onChange={uploadFile}
            type='file'
          />
          <label htmlFor={`updateTripImg${trip?.id}`} className='uploadImageLabel'>
            <img
              src={imageUrl ? `${API_PATH}${imageUrl}` : palmTree}
              alt={intl.formatMessage({ id: 'palm-tree-alt' })}
            />
            <div className='button outlinedButton'>{intl.formatMessage({ id: 'add-image' })}</div>
          </label>
        </ImageContainer>
        <div className='detailsContainer'>
          <h1 className='heading'>
            {intl.formatMessage({ id: 'your-trip' })}: <DeleteTrip trip={trip} withText={false} />
          </h1>
          <TripTitle trip={trip} />
          <TripDescription trip={trip} />
          <span className='startDate'>{intl.formatMessage({ id: 'start' })}:</span>
          <TripStartDate trip={trip} />
        </div>
      </div>
    </StyledSection>
  )
}

export default TopSection
