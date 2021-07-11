import styled from 'styled-components'
import { Menu } from '@material-ui/core'

export const MenuContainer = styled.div`
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 2px 4px;
  .MuiSvgIcon-root {
    fill: #fff;
  }
`
export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: #4c565e;
  }
  .MuiTypography-root {
    color: #fff;
    text-align: center;
  }
  .active {
    li {
      background-color: rgba(242, 239, 239, 0.15);
    }
  }
  li {
    border-bottom: 1px solid #ffffff1c;
  }
  a:last-child {
    li {
      border: none;
    }
  }
  .switcherWrapper {
    margin: 0 auto;
  }
`
