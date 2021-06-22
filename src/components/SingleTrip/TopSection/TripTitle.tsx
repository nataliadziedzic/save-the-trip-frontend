import * as React from 'react'
import { useIntl } from 'react-intl'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'
import { updateTrip } from '../../../api/trips.api'
import { ITrip } from '../../../types'
import TextField from '../../common/TextField/TextField'
import { EditFieldWrapper } from './TopSection.style'

export interface TripTitleProps {
  trip: ITrip
}

const TripTitle: React.FC<TripTitleProps> = ({ trip }) => {
  const intl = useIntl()
  const [editTitle, setEditTitle] = React.useState(false)
  const [title, setTitle] = React.useState(trip ? trip.title! : '')

  const updateTitle = () => {
    setEditTitle(false)
    title !== trip.title && updateTrip(trip.id!, { title })
  }

  React.useEffect(() => {
    trip?.title && setTitle(trip.title)
  }, [trip])

  return editTitle ? (
    <EditFieldWrapper>
      <TextField
        label={intl.formatMessage({ id: 'title' })}
        value={title}
        onChange={event => setTitle(event.target.value)}
        limit={50}
      />
      <span className='button' onClick={updateTitle}>
        <DoneIcon />
      </span>
    </EditFieldWrapper>
  ) : (
    <h2 className='title'>
      {title}{' '}
      <span className='button' onClick={() => setEditTitle(true)}>
        <EditIcon />
      </span>
    </h2>
  )
}

export default TripTitle
