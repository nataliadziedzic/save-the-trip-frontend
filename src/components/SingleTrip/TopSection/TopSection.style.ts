import styled from 'styled-components'
import { SIZES } from '../../../assets/styles/mediaQueries'

export const StyledSection = styled.section`
  width: 100%;
  padding: 24px 10%;
  background-color: #0000001c;
  font-size: 14px;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 1.5em;
    margin-bottom: 4px;
  }
  .description {
    font-size: 1.2em;
    margin-bottom: 24px;
  }
  .startDate {
    font-size: 0.9em;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .MuiSvgIcon-root {
    font-size: 18px;
    vertical-align: middle;
    margin-left: 8px;
  }
  .heading,
  .title,
  .description,
  .startDate {
    color: #fff;
  }
  @media only screen and ${SIZES.tablet} {
    .detailsContainer {
      align-items: center;
      text-align: center;
    }
  }
  @media only screen and ${SIZES.laptop} {
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
    .detailsContainer {
      align-items: flex-start;
      text-align: left;
      margin-left: 120px;
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
    background-color: #822067de;
    text-transform: capitalize;
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
export const EditFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  .button .MuiSvgIcon-root {
    margin-left: 16px;
    margin-bottom: 16px;
    fill: #77f977;
    transition: 0.3s;
    &:hover {
      font-size: 32px;
    }
  }
  .dateButton .MuiSvgIcon-root {
    margin-bottom: 0;
    margin-top: 16px;
  }
  .MuiSvgIcon-root {
    font-size: 27px;
  }
  .MuiFormControl-root {
    width: calc(100% - 50px);
  }
  @media only screen and ${SIZES.tablet} {
    width: 380px;
  }
`
