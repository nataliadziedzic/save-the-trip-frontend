import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { ListItemText, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuContainer, StyledMenu } from './HamburgerMenu.style'

const HamburgerMenu: React.FC = () => {
  const intl = useIntl()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const links = ['/account', '/auth']
  const title = [intl.formatMessage({ id: 'my-account' }), intl.formatMessage({ id: 'sign-out' })]

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
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
      </StyledMenu>
    </MenuContainer>
  )
}

export default HamburgerMenu
