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
    background-image: linear-gradient(to right top, #e367da, #b56ad5, #8969c9, #6064b6, #3c5d9f, #2f5795, #21518a, #124b80, #124683, #1a4186, #253b86, #323386); 
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
    color: #fff;
  }
  .outlinedButton {
    width: 120px;
    padding: 4px 8px;
    border: 1px solid white;
    border-radius: 5px;
    text-align: center;
    text-transform: uppercase;
    margin: 16px auto 0;
    transition: 0.3s;
    background-color: #74164b;
    @media only screen and ${SIZES.laptop} {
      background-color: transparent;
      &:hover {
        background-color: #74164b;
      }
    }
  }
  .MuiAlert-message, .MuiAlert-icon path, .MuiAlert-action path, .MuiButton-label {
    color: #fff;
  }
  .MuiCircularProgress-colorPrimary {
    color: #db1bab;
}
`
