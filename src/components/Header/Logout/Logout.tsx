import * as React from 'react'
import { useIntl } from 'react-intl'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import { signOut } from '../../../api/authorization.api'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { LogoutWrapper, StyledAvatar } from './Logout.style'
import { logout } from '../../../redux/slices/authed'

export interface LogoutProps {}

const Logout: React.FC<LogoutProps> = () => {
  const intl = useIntl()
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    signOut(user.id!, () => dispatch(logout()))
  }

  return (
    <LogoutWrapper onClick={handleLogout}>
      <StyledAvatar>
        <PowerSettingsNewIcon />
      </StyledAvatar>
      <span className='title'>{intl.formatMessage({ id: 'sign-out' })}</span>
    </LogoutWrapper>
  )
}

export default Logout
