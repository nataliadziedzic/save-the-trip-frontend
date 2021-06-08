import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'
import { useIntl } from 'react-intl'
import { notificationTime } from '../../variables'
import { displayMessage, isCustomEvent } from '../../commonFunctions/handleSnackbars'

const WarningSnackbar: React.FC = () => {
  const intl = useIntl()

  const [warning, setWarning] = React.useState(false)
  const [message, setMessage] = React.useState<string | null>(null)

  React.useEffect(() => {
    const warningSnackbar = document.querySelector('.warningSnackbar')
    if (warningSnackbar) {
      warningSnackbar.addEventListener('warning', (event: Event) => {
        if (isCustomEvent(event)) {
          displayMessage(event, setWarning, setMessage)
        }
      })
    }
  }, [])

  return (
    <div className='warningSnackbar'>
      <Snackbar open={warning} autoHideDuration={notificationTime} onClose={() => setWarning(false)}>
        <MuiAlert onClose={() => setWarning(false)} severity='warning' elevation={6} variant='filled'>
          {message && intl.formatMessage({ id: message })}
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default WarningSnackbar
