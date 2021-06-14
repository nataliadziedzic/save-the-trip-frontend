import * as React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'
import Media from 'react-media'

import brandName from '../../assets/images/brand-name.png'
import { SIZES } from '../../assets/styles/mediaQueries'

import Avatar from '../Avatar/Avatar'
import Logout from './Logout/Logout'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'
import { StyledHeader, User } from './Header.style'

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const user = useAppSelector(state => state.user)

  return (
    <StyledHeader>
      <Link to='/'>
        <div className='logo'>
          <img src={brandName} alt={'save the trip'} className='logo' />
        </div>
      </Link>
      <Media query={SIZES.tablet}>
        {matches =>
          matches ? (
            <>
              <User>
                <span className='username'>{user.username}</span>
                <Avatar user={user} />
              </User>
              <Logout />
            </>
          ) : (
            <HamburgerMenu />
          )
        }
      </Media>
    </StyledHeader>
  )
}

export default Header
