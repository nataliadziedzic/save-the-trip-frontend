import * as React from 'react'
import { useIntl } from 'react-intl'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'

import { LogoutWrapper, StyledAvatar } from './Logout.style'

export interface LogoutProps {}

const Logout: React.SFC<LogoutProps> = () => {
  const intl = useIntl()
  return (
    <LogoutWrapper>
      <StyledAvatar>
        <PowerSettingsNewIcon />
      </StyledAvatar>
      <span className='title'>{intl.formatMessage({ id: 'sign-out' })}</span>
    </LogoutWrapper>
  )
}

export default Logout
