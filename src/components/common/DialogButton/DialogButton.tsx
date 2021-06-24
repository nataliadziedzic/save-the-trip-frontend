import * as React from 'react'
import { useIntl } from 'react-intl'
import { StyledButton } from './DialogButton.style'

export interface DialogButtonProps {
  textContent: string
  primary?: boolean
  onClick: () => void
}

const DialogButton: React.FC<DialogButtonProps> = ({ textContent, primary, onClick }) => {
  const intl = useIntl()

  return (
    <StyledButton color={primary ? 'primary' : 'secondary'} onClick={onClick}>
      {intl.formatMessage({ id: textContent })}
    </StyledButton>
  )
}

export default DialogButton
