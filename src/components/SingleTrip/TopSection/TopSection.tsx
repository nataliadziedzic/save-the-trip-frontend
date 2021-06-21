import * as React from 'react'
import { useIntl } from 'react-intl'
import palmTree from '../../../assets/images/palm-tree.jpg'
import { ITrip } from '../../../types'
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
            <div className='button'>{intl.formatMessage({ id: 'add-image' })}</div>
          </label>
        </ImageContainer>
        <div className='detailsContainer'>
          <h1 className='heading'>{intl.formatMessage({ id: 'your-trip' })}:</h1>
          <h2 className='title'>{trip?.title}</h2>
          <h1 className='description'>{trip?.description}</h1>
          <span className='startDate'>{intl.formatMessage({ id: 'start' })}:</span>
          <span className='startDate'>20-09-2020</span>
        </div>
      </div>
    </StyledSection>
  )
}

export default TopSection
