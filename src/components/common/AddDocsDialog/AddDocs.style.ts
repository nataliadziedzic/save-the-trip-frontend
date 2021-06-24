import styled from 'styled-components'
import { SIZES } from '../../../assets/styles/mediaQueries'
import { Dialog } from '@material-ui/core'

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
export const StyledDocsDialog = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    max-width: 750px;
  }
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
  .MuiDivider-root {
    background-color: rgba(0, 0, 0, 0.64);
    margin-top: 8px;
  }
  .MuiButton-root {
    margin-right: 24px;
  }
`
