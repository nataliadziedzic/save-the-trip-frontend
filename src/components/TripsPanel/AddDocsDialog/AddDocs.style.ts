import styled from 'styled-components'
import { StyledDialog } from '../AddTripDialog/AddTripDialog.style'

export const DocumentsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 16px;
  justify-items: end;
`
export const StyledDocsDialog = styled(StyledDialog)`
  .MuiDialog-paperWidthSm {
    max-width: 750px;
  }
  .MuiDivider-root {
    background-color: rgba(0, 0, 0, 0.64);
    margin-top: 8px;
  }
  .save {
    margin-right: 24px;
  }
`
