import styled from 'styled-components'
import { SIZES } from '../../assets/styles/mediaQueries'

export const TripContainer = styled.div`
  .listsContainer {
    max-width: 1700px;
    margin: 24px auto 0;
    padding: 8px 24px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 24px;
    font-size: 16px;
  }
  .listWrapper {
    border-radius: 7px;
    padding: 16px 24px;
    min-height: 200px;
    text-align: center;
  }
  .listTitle {
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 1px;
    position: relative;
    &:after {
      content: '';
      width: 100%;
      height: 0.5px;
      background-color: #fff;
      display: block;
      margin: 8px auto; 0
    }
    .MuiSvgIcon-root {
      vertical-align: bottom;
    }
  }
  .button {
    width: 120px;
    padding: 4px 8px;
    border: 1px solid white;
    border-radius: 5px;
    text-align: center;
    margin: 16px auto 0;
    transition: 0.3s;
  }
  @media only screen and ${SIZES.tablet} {
    .listsContainer {
    grid-template-columns: 1fr 1fr;
    column-gap: 64px;
    }
    .listTitle {
       &:after {
        width: 70%;
        height: 1px
       }
    }
  }
`
