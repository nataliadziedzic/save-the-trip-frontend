import { createGlobalStyle } from 'styled-components'
import { SIZES } from './mediaQueries'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: #fff;
  }
  html {
    font-size: 14px;
    @media only screen and ${SIZES.tablet} {
      font-size: 16px;
    }
  }
  body{
    min-height: 100vh;
    width: 100%;
    background-image: linear-gradient(to right top, #7ca5c9, #6e90ad, #607c91, #546877, #48555e, #4b565e, #4e575d, #51585d, #646e76, #788690, #8c9dab, #a1b6c7);   
   }
  .App, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
  a {
    color: inherit;
    border: none;
  }
  ul {
    list-style: none;
  }
  .button {
    cursor: pointer;
  }
  .MuiAlert-message, .MuiAlert-icon path, .MuiAlert-action path, .MuiButton-label {
    color: #fff;
  }
`
