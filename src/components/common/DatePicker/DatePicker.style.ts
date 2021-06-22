import styled from 'styled-components'
import { KeyboardDatePicker } from '@material-ui/pickers'

export const StyledDatePicker = styled(KeyboardDatePicker)`
  .MuiInputBase-input, .MuiSvgIcon-root {
    color: #fff;
    border-color: 
  }
  .MuiFormLabel-root {
      color: #ffffffde;
  }
  .MuiInput-underline::before {
      border-bottom: 1px solid rgba(255, 255, 255, 0.42);
    }
    .MuiInput-underline:hover:not(.Mui-disabled)::before {
      border-bottom: 1px solid rgba(255, 255, 255, 0.42);
  }
  .MuiInput-underline::after {
      border-bottom: 2px solid #a7388e;
  }
`