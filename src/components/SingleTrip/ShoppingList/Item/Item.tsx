import * as React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

import { IShoppingItem } from '../../../../types'
import { deleteShoppingItem } from '../../../../api/shoppingItems.api'

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
  const [edit, setEdit] = React.useState(false)
  const [singleItem, setSingleItem] = React.useState<IShoppingItem | null>(null)
  const unit = singleItem?.unit === Unit.PIECE ? 'x' : 'kg'

  React.useEffect(() => {
    if (item) {
      setSingleItem(item)
    }
  }, [item])

  return (
    singleItem && (
      <>
        <StyledItem>
          <span className='button' onClick={() => deleteShoppingItem(singleItem.id!, () => setSingleItem(null))}>
            <DeleteOutlineIcon />
          </span>
          {singleItem.amount}
          {unit} {singleItem.title}
          {!edit && (
            <span className='button' onClick={() => setEdit(true)}>
              <EditIcon />
            </span>
          )}
        </StyledItem>
        <EditDialog open={edit} setOpen={setEdit} item={singleItem} setItem={setSingleItem} />
      </>
    )
  )
}

export default Item
