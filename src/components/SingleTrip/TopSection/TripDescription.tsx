import * as React from 'react'
import { useIntl } from 'react-intl'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'
import { updateTrip } from '../../../api/trips.api'
import { ITrip } from '../../../types'
import TextField from '../../common/TextField/TextField'
import { EditFieldWrapper } from './TopSection.style'

export interface TripDescriptionProps {
  trip: ITrip
}

const TripDescription: React.FC<TripDescriptionProps> = ({ trip }) => {
  const intl = useIntl()
  const [editDescription, setEditDescription] = React.useState(false)
  const [description, setDescription] = React.useState(trip ? trip.description! : '')

  const updateDescription = () => {
    setEditDescription(false)
    description !== trip.description && updateTrip(trip.id!, { description })
  }

  React.useEffect(() => {
    trip?.description && setDescription(trip.description)
  }, [trip])

  return editDescription ? (
    <EditFieldWrapper>
      <TextField
        label={intl.formatMessage({ id: 'description' })}
        value={description}
        onChange={event => setDescription(event.target.value)}
        limit={255}
      />
      <span className='button' onClick={updateDescription}>
        <DoneIcon />
      </span>
    </EditFieldWrapper>
  ) : (
    <h3 className='description'>
      {description}{' '}
      <span className='button' onClick={() => setEditDescription(true)}>
        <EditIcon />
      </span>
    </h3>
  )
}

export default TripDescription
