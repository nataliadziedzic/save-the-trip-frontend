import styled from 'styled-components'
import { SIZES } from '../../assets/styles/mediaQueries'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right, #dea0bb, #cca2c3, #baa4c6, #aaa6c3, #9fa6bc);
  .gridContainer {
    @media only screen and ${SIZES.laptop} and (orientation: landscape) {
      max-height: 750px;
      max-width: 2000px;
    }
    height: 100%;
    overflow: hidden;
  }
  .image {
    background-image: url(https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_960_720.jpg);
    background-repeat: no-repeat;
    background-color: #ddd;
    background-size: cover;
    background-position: center;
  }
  .authorizationContainer {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .logo {
    width: 100px;
    margin: 0 0 60px;
  }
`
export const InputsWrapper = styled.div`
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  font-size: 12px;
  color: #3f51b5;
  .avatar {
    margin: 8px;
    background-color: #3f51b5;
  }
  .form {
    width: 100%;
    margin-top: 16px;
  }
  .submitButton {
    margin: 8px 0;
  }
  .textButton {
    cursor: pointer;
    color: #3f51b5;
  }
  @media only screen and ${SIZES.mobileM} {
    font-size: 14px;
  }
`
export const LogoSection = styled.section`
  display: none;
  @media only screen and ${SIZES.tablet} {
    display: block;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
      to right top,
      #dddce6,
      #e4e2eb,
      #eae9ef,
      #f1eff4,
      #f7f6f9,
      #ebe7f5,
      #ded8f1,
      #d0caed,
      #aea3de,
      #8c7ecf,
      #6a59be,
      #4335ad
    );
  }
`
export const Error = styled.div`
  text-align: center;
  color: red;
  font-size: 11px;
  margin-bottom: 10px;
`
