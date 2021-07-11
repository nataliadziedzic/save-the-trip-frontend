import styled from 'styled-components'

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .language,
  .divider {
    color: #fff;
  }
  .chosenLang {
    border-bottom: 1px solid white;
  }
  .divider {
    margin: 0 4px;
  }
`
