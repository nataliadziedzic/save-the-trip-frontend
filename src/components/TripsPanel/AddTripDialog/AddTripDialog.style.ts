import styled from 'styled-components'
import { Dialog } from '@material-ui/core'

export const StyledDialog = styled(Dialog)`
  .MuiInputBase-input {
    color: #000 !important;
  }
  .MuiInput-underline::before {
    border-bottom: 1px solid #000;
  }
  .MuiInput-underline:hover:not(.Mui-disabled)::before {
    border-bottom: 1px solid #000;
  }
  .MuiInput-underline::after {
    border-bottom: 2px solid #3f51b5;
  }
  .MuiSvgIcon-root {
    fill: #3f51b5;
  }
  .MuiTypography-colorTextSecondary {
    color: rgba(0, 0, 0, 0.61);
  }
`
