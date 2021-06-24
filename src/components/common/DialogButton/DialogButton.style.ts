import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const StyledButton = styled(Button)`
  .MuiButton-label {
    color: inherit;
  }
  .MuiButton-label {
    font-weight: 500;
  }
  &:hover {
    background-color: ${props => (props.color === 'primary' ? '#b7cbe59e' : '#e5b7e29e')};
  }
`
