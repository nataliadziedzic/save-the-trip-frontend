import * as React from 'react'
import { useIntl } from 'react-intl'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { IShoppingItem, ITrip } from '../../../types'
import Item from './Item/Item'
import ShoppingListDialog from './ShoppingListDialog/ShoppingListDialog'
import { ListWrapper } from './ShoppingList.style'
import { getShoppingItems } from '../../../api/shoppingItems.api'

export interface ShoppingListProps {
  trip: ITrip
}

const ShoppingList: React.FC<ShoppingListProps> = ({ trip }) => {
  const intl = useIntl()
  const [open, setOpen] = React.useState(false)
  const [items, setItems] = React.useState<IShoppingItem[]>([])

  React.useEffect(() => {
    trip && getShoppingItems(trip.id!, setItems)
  }, [trip])

  return (
    <ListWrapper className='listWrapper'>
      <h3 className='listTitle'>
        {intl.formatMessage({ id: 'shopping-list' })} <AttachMoneyIcon />
      </h3>
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <div className='button outlinedButton' onClick={() => setOpen(true)}>
        {intl.formatMessage({ id: 'add' })}
      </div>
      <ShoppingListDialog tripId={trip?.id!} open={open} setOpen={setOpen} setItems={setItems} />
    </ListWrapper>
  )
}

export default ShoppingList
