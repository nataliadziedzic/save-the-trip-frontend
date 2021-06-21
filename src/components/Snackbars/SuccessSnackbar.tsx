import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { notificationTime } from '../../variables'
import { displayMessage, isCustomEvent } from '../../commonFunctions/handleSnackbars'

const SuccessSnackbar: React.FC = () => {
  const intl = useIntl()
  const [success, setSuccess] = React.useState(false)
  const defaultMessage = 'changes-saved'
  const [message, setMessage] = React.useState(defaultMessage)

  React.useEffect(() => {
    const successSnackbar = document.querySelector('.successSnackbar')
    if (successSnackbar) {
      successSnackbar.addEventListener('success', (event: Event) => {
        if (isCustomEvent(event)) {
          displayMessage(event, setSuccess, setMessage)
        }
      })
    }
  }, [])

  return (
    <div className='successSnackbar'>
      <Snackbar open={success} autoHideDuration={notificationTime} onClose={() => setSuccess(false)}>
        <MuiAlert onClose={() => setSuccess(false)} severity='success' elevation={6} variant='filled'>
          {intl.formatMessage({ id: message })}
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default SuccessSnackbar
