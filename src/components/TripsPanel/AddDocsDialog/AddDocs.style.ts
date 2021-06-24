import styled from 'styled-components'
import { SIZES } from '../../../assets/styles/mediaQueries'
import { StyledDialog } from '../AddTripDialog/AddTripDialog.style'

export const DocumentsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 16px;
  column-gap: 16px;
  justify-items: end;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  @media only screen and ${SIZES.mobileS} {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and ${SIZES.tablet} {
    column-gap: 80px;
  }
  @media only screen and ${SIZES.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const StyledDocsDialog = styled(StyledDialog)`
  .MuiDialog-paperWidthSm {
    max-width: 750px;
  }
  .MuiDivider-root {
    background-color: rgba(0, 0, 0, 0.64);
    margin-top: 8px;
  }
  .MuiButton-root {
    margin-right: 24px;
  }
`
