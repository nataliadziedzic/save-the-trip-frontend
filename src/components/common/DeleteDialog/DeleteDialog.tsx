import React from 'react'
import { useIntl } from 'react-intl'
import { DialogActions, DialogTitle } from '@material-ui/core'
import { StyledDialog } from './DeleteDialog.style'
import DialogButton from '../DialogButton/DialogButton'

export interface DeleteDialogProps {
  open: boolean
  setOpen: (arg: boolean) => void
  title: string | undefined
  handleDelete: () => void
  cancelElementToDelete: () => void
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ open, setOpen, handleDelete, cancelElementToDelete, title }) => {
  const intl = useIntl()
  const cancelDeleting = () => {
    setOpen(false)
    cancelElementToDelete()
  }
  const deleteItem = () => {
    handleDelete()
    setOpen(false)
  }
  return (
    <div>
      <StyledDialog open={open} onClose={() => setOpen(false)} aria-labelledby='alert-dialog-title'>
        <DialogTitle className='dialogTitle' disableTypography id='alert-dialog-title'>
          {intl.formatMessage({ id: 'delete-confirmation' })} <span className='elementTitle'>{title}</span>?
        </DialogTitle>
        <DialogActions>
          <DialogButton textContent='no' onClick={cancelDeleting} />
          <DialogButton textContent='yes' onClick={deleteItem} primary={true} />
        </DialogActions>
      </StyledDialog>
    </div>
  )
}

export default DeleteDialog
