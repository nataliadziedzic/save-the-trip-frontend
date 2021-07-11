import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  padding: 8px 32px;
  background-color: #0006;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 120px;
  }
  .actionsWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .switcherWrapper {
    margin-right: 40px;
  }
`
export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .username {
    margin-right: 8px;
    font-size: 14px;
    color: #fff;
  }
`
