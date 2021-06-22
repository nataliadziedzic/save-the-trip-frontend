import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SIZES } from '../../assets/styles/mediaQueries'

export const TripsContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 42px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .heading {
    text-transform: uppercase;
    margin-bottom: 32px;
  }
  *{
    color: #fff;
  }
`
export const Trip = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid #fff;
  border-radius: 10px;
  padding: 8px 24px 4px;
  margin-bottom: 32px;
  .tripDescription,
  .tripStart {
    justify-self: center;
  }
  .text {
    font-size: 14px;
  }
  .boldText {
    font-weight: 500;
  }
  @media only screen and ${SIZES.tablet} {
    grid-template-columns: 1fr 1fr 1fr 100px;
    align-items: center;
    justify-items: start;
  }
`
export const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 8px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 150%;
    height: 40%;
    background-color: #fff;
    opacity: 0.2;
    transform: rotate(45deg);
    transition: all ease 1.3s;
  }
  &:hover:before {
    left: 100%;
  }
  .MuiSvgIcon-root {
    margin-left: 8px;
    font-size: 1.1rem;
  }
  @media only screen and ${SIZES.tablet} {
    justify-self: end;
  }
`
