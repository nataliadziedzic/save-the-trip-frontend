import * as React from 'react'
import { useIntl } from 'react-intl'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import { useAppDispatch } from '../../redux/hooks'
import { setUser } from '../../redux/slices/user'
import { signUp } from '../../api/authorization.api'
import { emailValidation, passwordValidation } from '../../variables'
import { dispatchSuccess } from '../../commonFunctions/handleSnackbars'
import Copyright from '../Copyright/Copyright'
import { Error } from './Authorization.style'

export interface RegistrationProps {
  changeView: () => void
}

const Registration: React.FC<RegistrationProps> = ({ changeView }) => {
  const intl = useIntl()
  const dispatch = useAppDispatch()

  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')

  const [emptyError, setEmptyError] = React.useState(false)
  const [emailError, setEmailError] = React.useState(false)
  const [passwordValidationError, setPasswordValidationError] = React.useState(false)
  const [passwordMatchingError, setPasswordMatchingError] = React.useState(false)

  const verifyUserData = () => {
    setEmailError(false)
    setEmptyError(false)
    setPasswordValidationError(false)
    setPasswordMatchingError(false)
    if (username.length === 0 || password.length === 0 || email.length === 0) {
      setEmptyError(true)
      return
    } else if (
      !emailValidation.test(email) ||
      !passwordValidation.test(password) ||
      password !== passwordConfirmation
    ) {
      if (!emailValidation.test(email)) {
        setEmailError(true)
      }
      if (!passwordValidation.test(password)) {
        setPasswordValidationError(true)
      }
      if (password !== passwordConfirmation) {
        setPasswordMatchingError(true)
      }
      return
    } else {
      registerUser()
    }
  }

  const registerUser = () => {
    const actions = (username: string, id: number, email: string) => {
      changeView()
      dispatchSuccess('create-account-success')
      dispatch(setUser({ username, id, email }))
    }
    const newUser = {
      username,
      password,
      email,
    }
    signUp(newUser, actions)
  }
  return (
    <>
      <Typography component='h1' variant='h5'>
        {intl.formatMessage({ id: 'sign-up' })}
      </Typography>
      <form className='form' noValidate>
        {emptyError && <Error>{intl.formatMessage({ id: 'empty-fields' })}</Error>}
        {emailError && <Error>{intl.formatMessage({ id: 'email-requirements-error' })}</Error>}
        {passwordValidationError && <Error>{intl.formatMessage({ id: 'password-requirements-error' })}</Error>}
        {passwordMatchingError && <Error>{intl.formatMessage({ id: 'password-match-error' })}</Error>}
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email'
          name='email'
          autoComplete='email'
          autoFocus
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='username'
          label={intl.formatMessage({ id: 'username' })}
          name='username'
          autoComplete='username'
          autoFocus
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label={intl.formatMessage({ id: 'password' })}
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={event => setPassword(event.target.value)}
          helperText={intl.formatMessage({ id: 'password-requirements' })}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password-confirmation'
          label={intl.formatMessage({ id: 'confirm-password' })}
          type='password'
          id='password-confirmation'
          autoComplete='current-password'
          value={passwordConfirmation}
          onChange={event => setPasswordConfirmation(event.target.value)}
        />
        <Button fullWidth variant='contained' color='primary' className='submitButton' onClick={verifyUserData}>
          {intl.formatMessage({ id: 'sign-up' })}
        </Button>
        <Grid container>
          <Grid item onClick={changeView} className='textButton'>
            {intl.formatMessage({ id: 'have-account-sign-in' })}
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </>
  )
}

export default Registration
