import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  .title {
    font-size: 13px;
  }
`

export const StyledAvatar = styled(Avatar)`
  width: 25px;
  height: 25px;
  background-color: #822067;
  .MuiSvgIcon-root {
    font-size: 1.3rem;
  }
`
