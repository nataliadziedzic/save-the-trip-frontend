import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { ListItemText, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuContainer, StyledMenu } from './HamburgerMenu.style'

import { signOut } from '../../../api/authorization.api'
import { logout } from '../../../redux/slices/authed'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

const HamburgerMenu: React.FC = () => {
  const intl = useIntl()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const links = ['/', '/account']
  const title = [intl.formatMessage({ id: 'home' }), intl.formatMessage({ id: 'my-account' })]

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    signOut(user.id!, () => dispatch(logout()))
    handleClose()
  }

  return (
    <MenuContainer>
      <div aria-controls='customized-menu' aria-label='Show menu' onClick={handleClick}>
        <MenuIcon />
      </div>
      <StyledMenu id='customized-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {links.map((link, index) => (
          <NavLink to={link} key={index} onClick={handleClose}>
            <MenuItem className='listItem'>
              <ListItemText primary={title[index]} />
            </MenuItem>
          </NavLink>
        ))}
        <NavLink to='/auth' onClick={handleLogout}>
          <MenuItem className='listItem'>
            <ListItemText primary={intl.formatMessage({ id: 'sign-out' })} />
          </MenuItem>
        </NavLink>
        <MenuItem className='listItem'>
          <LanguageSwitcher />
        </MenuItem>
      </StyledMenu>
    </MenuContainer>
  )
}

export default HamburgerMenu
