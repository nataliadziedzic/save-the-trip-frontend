/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import Media from 'react-media'
import { useIntl } from 'react-intl'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'

import { ITrip } from '../../../types'
import { useTripContext } from '../../../context/trip.context'
import { deleteTrip } from '../../../api/trips.api'
import { SIZES } from '../../../assets/styles/mediaQueries'

import DeleteDialog from '../../common/DeleteDialog/DeleteDialog'
import { StyledIconButton } from './DeleteTrip.style'

export interface DeleteTripProps {
  trip: ITrip
}

const DeleteTrip: React.FC<DeleteTripProps> = ({ trip }) => {
  interface TripToDelete {
    id: number
    title: string
  }
  const tripContext = useTripContext()
  const intl = useIntl()
  const [tripToDelete, setTripToDelete] = React.useState<null | TripToDelete>(null)
  const [shouldDelete, setShouldDelete] = React.useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false)

  const handleDeleteTrip = (id: number, title: string) => {
    setOpenDeleteDialog(true)
    setTripToDelete({ id, title })
  }
  React.useEffect(() => {
    if (tripToDelete && shouldDelete) {
      deleteTrip(tripToDelete.id, () => tripContext.deleteTripFromArray(tripToDelete.id))
      setTripToDelete(null)
      setShouldDelete(false)
    }
  }, [tripToDelete, shouldDelete])
  return (
    <div className='deleteIconWrapper'>
      <Media query={SIZES.tablet}>
        {matches =>
          matches ? (
            <span className='deleteIconButton' onClick={() => handleDeleteTrip(trip.id!, trip.title!)}>
              <DeleteOutlineIcon />
            </span>
          ) : (
            <StyledIconButton className='deleteIconButton' onClick={() => handleDeleteTrip(trip.id!, trip.title!)}>
              {intl.formatMessage({ id: 'delete' })} <DeleteOutlineIcon />
            </StyledIconButton>
          )
        }
      </Media>
      <DeleteDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        title={tripToDelete?.title}
        handleDelete={() => setShouldDelete(true)}
        cancelElementToDelete={() => setTripToDelete(null)}
      />
    </div>
  )
}

export default DeleteTrip
