import * as React from 'react'
import { useIntl } from 'react-intl'
import { DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core'
import { useSetDocumentsContext } from '../../../context/documents.context'
import { createTrip } from '../../../api/trips.api'
import { dispatchWarning } from '../../../commonFunctions/handleSnackbars'
import DatePicker from '../../common/DatePicker/DatePicker'
import { StyledDialog } from './AddTripDialog.style'
import format from 'date-fns/format'
import { useTripContext } from '../../../context/trip.context'

export interface AddTripDialogProps {
  open: boolean
  setOpen: (arg: boolean) => void
  setOpenDocumentsDialog: (arg: boolean) => void
  userId: number
}

const AddTripDialog: React.FC<AddTripDialogProps> = ({ open, setOpen, userId, setOpenDocumentsDialog }) => {
  const intl = useIntl()
  const setDocumentsContext = useSetDocumentsContext()
  const tripsContext = useTripContext()

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [startDate, setStartDate] = React.useState(format(new Date(), 'yyyy-MM-dd'))

  const handleClose = () => {
    setOpen(false)
  }
  const handleCreateTrip = async () => {
    if (title.length && description.length && startDate.length) {
      await createTrip(
        {
          title,
          description,
          start_date: startDate,
          user_id: userId,
        },
        setDocumentsContext.setDocumentsId,
        setDocumentsContext.setTripId,
        tripsContext.updateTrips
      )
      setOpen(false)
      setOpenDocumentsDialog(true)
    } else dispatchWarning('empty-warning')
  }

  return (
    <StyledDialog id='tripDialog' open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>{intl.formatMessage({ id: 'create-trip-heading' })}</DialogTitle>
      <DialogContent>
        <DialogContentText>{intl.formatMessage({ id: 'create-trip-intro' })}</DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='title'
          label={intl.formatMessage({ id: 'title' })}
          fullWidth
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <TextField
          margin='dense'
          id='description'
          label={intl.formatMessage({ id: 'description' })}
          fullWidth
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
        <DatePicker currentDate={new Date()} setCurrentDateSend={setStartDate} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary' className='cancel'>
          {intl.formatMessage({ id: 'cancel' })}
        </Button>
        <Button onClick={handleCreateTrip} color='primary' className='save'>
          {intl.formatMessage({ id: 'save' })}
        </Button>
      </DialogActions>
    </StyledDialog>
  )
}

export default AddTripDialog
