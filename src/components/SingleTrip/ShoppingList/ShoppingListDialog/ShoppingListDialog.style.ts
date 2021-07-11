import styled from 'styled-components'
import { StyledDocsDialog } from '../../../common/AddDocsDialog/AddDocs.style'

export const StyledDialog = styled(StyledDocsDialog)`
  .MuiOutlinedInput-notchedOutline {
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0;
  }
  .MuiOutlinedInput-multiline {
    padding: 14px;
  }
  .quantityInput {
    width: 200px;
  }
  .inputsWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    row-gap: 16px;
  }
  .title {
    grid-column: 1/-1;
    width: 60%;
  }
`
