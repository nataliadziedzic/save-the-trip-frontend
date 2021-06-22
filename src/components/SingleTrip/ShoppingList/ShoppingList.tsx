import * as React from 'react'
import { useIntl } from 'react-intl'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { ITrip } from '../../../types'
import { ListWrapper } from './ShoppingList.style'

export interface ShoppingListProps {
  trip: ITrip
}

const ShoppingList: React.FC<ShoppingListProps> = ({ trip }) => {
  const intl = useIntl()
  return (
    <ListWrapper className='listWrapper'>
      <h3 className='listTitle'>
        {intl.formatMessage({ id: 'shopping-list' })} <AttachMoneyIcon />
      </h3>
      <div className='button outlinedButton'>DODAJ</div>
    </ListWrapper>
  )
}

export default ShoppingList
