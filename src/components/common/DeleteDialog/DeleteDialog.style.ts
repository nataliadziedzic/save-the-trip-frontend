import styled from 'styled-components'
import { Dialog } from '@material-ui/core'

export const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    min-width: 300px;
  }
  .dialogTitle {
    font-size: 18px;
  }
  .elementTitle {
    color: red;
  }
  .MuiDialogActions-root {
    justify-content: center;
  }
  .MuiButton-label {
    font-size: 15px;
  }
`
