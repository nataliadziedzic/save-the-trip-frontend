import * as React from 'react'
import { useIntl } from 'react-intl'
import {
  DialogContentText,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  InputLabel,
  Input,
  FormControl,
  NativeSelect,
  TextField,
} from '@material-ui/core'

import { useAppSelector } from '../../../../redux/hooks'
import { IShoppingItem } from '../../../../types'
import { updateShoppingItem } from '../../../../api/shoppingItems.api'

import DialogButton from '../../../common/DialogButton/DialogButton'
import { StyledDialog } from '../ShoppingListDialog/ShoppingListDialog.style'

export interface ShoppingListDialogProps {
  open: boolean
  setOpen: (arg: boolean) => void
  item: IShoppingItem
  setItem: (item: IShoppingItem) => void
}

const ShoppingListDialog: React.FC<ShoppingListDialogProps> = ({ open, setOpen, item, setItem }) => {
  const intl = useIntl()
  const user = useAppSelector(state => state.user)

  const [title, setTitle] = React.useState('')
  const [amount, setAmount] = React.useState(1)
  const [unit, setUnit] = React.useState('')

  React.useEffect(() => {
    if (item) {
      setTitle(item.title!)
      setAmount(item.amount!)
      setUnit(item.unit!)
    }
  }, [item])

  const handleClose = () => {
    setOpen(false)
  }
  const handleUpdateShoppingItem = () => {
    const updatedItem = {
      id: item.id,
      title,
      amount,
      unit,
      status: item.status,
      trip_id: item.trip_id,
      user_id: user.id,
    }
    updateShoppingItem(
      updatedItem,
      () => setItem(updatedItem),
      () => setOpen(false)
    )
  }
  return (
    <StyledDialog id='tripDialog' open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>{intl.formatMessage({ id: 'shopping-list' })}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {intl.formatMessage({ id: 'add-shopping-item-intro' })} <Divider />
        </DialogContentText>
        <div className='inputsWrapper'>
          <TextField
            label={intl.formatMessage({ id: 'title' })}
            inputProps={{
              maxLength: 50,
            }}
            helperText={`${title.length}/50`}
            value={title}
            onChange={event => setTitle(event.target.value)}
            multiline
            margin='dense'
            variant='outlined'
            autoFocus
            id='title'
            className='title'
            fullWidth
          />
          <FormControl className='quantityInput'>
            <InputLabel htmlFor='product-amount'>{intl.formatMessage({ id: 'amount' })}</InputLabel>
            <Input
              type='number'
              required
              id='product-amount'
              value={amount}
              onChange={event => setAmount(+event.target.value)}
            />
          </FormControl>
          <FormControl className='quantityInput'>
            <InputLabel htmlFor='unit'>{intl.formatMessage({ id: 'unit' })}</InputLabel>
            <NativeSelect
              value={unit}
              onChange={event => setUnit(event.target.value)}
              inputProps={{
                id: 'unit',
              }}
            >
              <option onClick={() => setUnit('')} aria-label='None' value='' />
              <option onClick={() => setUnit('PIECE')} value='PIECE'>
                {intl.formatMessage({ id: 'piece' })}
              </option>
              <option onClick={() => setUnit('KG')} value='KG'>
                Kg
              </option>
            </NativeSelect>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <DialogButton textContent='save' onClick={handleUpdateShoppingItem} primary />
      </DialogActions>
    </StyledDialog>
  )
}

export default ShoppingListDialog
