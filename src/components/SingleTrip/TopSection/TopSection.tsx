import * as React from 'react'
import { useIntl } from 'react-intl'
import palmTree from '../../../assets/images/palm-tree.jpg'
import { ITrip } from '../../../types'
import TripTitle from './TripTitle'
import TripDescription from './TripDescription'
import TripStartDate from './TripStartDate'
import { ImageContainer, StyledSection } from './TopSection.style'
import DeleteTrip from '../../DeleteTrip/DeleteTrip'

export interface TopSectionProps {
  trip: ITrip
}

const TopSection: React.FC<TopSectionProps> = ({ trip }) => {
  const intl = useIntl()

  const [imageUrl, setImageUrl] = React.useState<string | null>(null)

  const uploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    else if (event.target.files[0]) {
      //  postTripImage(event.target.files[0], setImageUrl)
    }
  }
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
            <img src={imageUrl || palmTree} alt={intl.formatMessage({ id: 'palm-tree-alt' })} />
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
