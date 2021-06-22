/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import format from 'date-fns/format'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'
import { updateTrip } from '../../../api/trips.api'
import { ITrip } from '../../../types'
import DatePicker from '../../common/DatePicker/DatePicker'
import { EditFieldWrapper } from './TopSection.style'

export interface TripStartDateProps {
  trip: ITrip
}

const TripStartDate: React.FC<TripStartDateProps> = ({ trip }) => {
  const [editDate, setEditDate] = React.useState(false)
  const [startDateToRead, setStartDateToRead] = React.useState('')
  const [startDateToSend, setStartDateToSend] = React.useState('')
  const formattedStartDate = new Date(trip?.start_date!)

  const updateDate = () => {
    setEditDate(false)
    const dateToCompare = format(formattedStartDate, 'yyyy-MM-dd')
    if(startDateToSend && startDateToSend !== dateToCompare) {
      updateTrip(trip.id!, { start_date: startDateToSend })
    }
  }

  React.useEffect(() => {
    trip?.start_date && setStartDateToRead(format(formattedStartDate, 'dd-MM-yyyy'))
  }, [trip])

  return editDate ? (
    <EditFieldWrapper>
      <DatePicker currentDate={formattedStartDate} setCurrentDateRead={setStartDateToRead} setCurrentDateSend={setStartDateToSend} />
      <span className='button dateButton' onClick={updateDate}>
        <DoneIcon />
      </span>
    </EditFieldWrapper>
  ) : (
    <span className='startDate date'>
      {startDateToRead}{' '}
      <span className='button' onClick={() => setEditDate(true)}>
        <EditIcon />
      </span>
    </span>
  )
}

export default TripStartDate
