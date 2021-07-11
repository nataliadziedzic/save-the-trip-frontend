import * as React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import { Divider, Checkbox } from '@material-ui/core'

import { IShoppingItem } from '../../../../types'
import { deleteShoppingItem, updateItemStatus } from '../../../../api/shoppingItems.api'

import EditDialog from '../EditDialog/EditDialog'
import { StyledItem } from './Item.style'

export interface ItemProps {
  item: IShoppingItem
}

const Item: React.FC<ItemProps> = ({ item }) => {
  enum Unit {
    PIECE = 'PIECE',
    KG = 'KG',
  }
  enum Status {
    TO_BUY = 'TO_BUY',
    BOUGHT = 'BOUGHT',
  }
  const [edit, setEdit] = React.useState(false)
  const [singleItem, setSingleItem] = React.useState<IShoppingItem | null>(null)
  const [status, setStatus] = React.useState<string | null>(null)
  const unit = singleItem?.unit === Unit.PIECE ? 'x' : 'kg'

  React.useEffect(() => {
    if (item) {
      setSingleItem(item)
    }
  }, [item])
  React.useEffect(() => {
    if (singleItem) {
      setStatus(singleItem.status!)
    }
  }, [singleItem])

  const changeStatus = () => {
    const status = singleItem?.status === Status.TO_BUY ? Status.BOUGHT : Status.TO_BUY
    setStatus(status)
    if (singleItem) {
      updateItemStatus(singleItem.id!, { status })
    }
  }

  return (
    singleItem && (
      <>
        <StyledItem>
          <Checkbox
            className={status === Status.BOUGHT ? 'bought' : ''}
            checked={status === Status.BOUGHT}
            onChange={changeStatus}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          {singleItem.quantity}
          {unit} {singleItem.title}
          <div>
            {!edit && (
              <span className='button' onClick={() => setEdit(true)}>
                <EditIcon />
              </span>
            )}
            <span className='button' onClick={() => deleteShoppingItem(singleItem.id!, () => setSingleItem(null))}>
              <DeleteOutlineIcon />
            </span>
          </div>
        </StyledItem>
        <Divider />
        <EditDialog open={edit} setOpen={setEdit} item={singleItem} setItem={setSingleItem} />
      </>
    )
  )
}

export default Item
