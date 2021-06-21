import styled from 'styled-components'
import { SIZES } from '../../../assets/styles/mediaQueries'

export const StyledSection = styled.section`
  width: 100%;
  padding: 24px 10%;
  background-color: #0000001c;
  font-size: 12px;
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .detailsContainer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    max-width: 400px;
  }
  .heading {
    font-size: 1em;
    margin-bottom: 16px;
    margin-top: 16px;
  }
  .title {
    font-size: 1.5em;
    margin-bottom: 4px;
  }
  .description {
    font-size: 1.3em;
    margin-bottom: 24px;
  }
  .startDate {
    font-size: 0.9em;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  @media only screen and ${SIZES.tablet} {
    .detailsContainer {
      align-items: center;
      text-align: center;
    }
  }
  @media only screen and ${SIZES.laptop} {
    font-size: 13px;
    .wrapper {
      flex-direction: row;
    }
    .detailsContainer {
      margin-left: 72px;
    }
    .heading {
      margin-top: 0;
    }
  }
  @media only screen and ${SIZES.laptopL} {
    font-size: 14px;
    .detailsContainer {
      max-width: 600px;
    }
  }
  @media only screen and ${SIZES.desktop} {
    font-size: 16px;
  }
`
export const ImageContainer = styled.div`
  width: 400px;
  max-height: 350px;
  overflow: hidden;
  position: relative;
  img {
    transition: 0.3s;
  }
  .uploadImageLabel {
    &:hover {
      img {
        opacity: 0.8;
      }
      .button {
        background-color: #822067de;
        opacity: 1;
      }
    }
  }
  .button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    padding: 4px 8px;
    border: 1px solid white;
    border-radius: 5px;
    text-align: center;
    background-color: #822067de;
    transition: 0.3s;
  }
  @media only screen and ${SIZES.laptopL} {
    .button {
      opacity: 0.7;
      background-color: #67465e;
    }
  }
  @media only screen and ${SIZES.desktop} {
    width: 600px;
  }
`
