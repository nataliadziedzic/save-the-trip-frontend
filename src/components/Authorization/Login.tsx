import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import * as React from 'react'
import { useIntl } from 'react-intl'
import { signIn } from '../../api/authorization.api'
import { useAppDispatch } from '../../redux/hooks'
import { setUser } from '../../redux/slices/user'
import { AuthedUser } from '../../types'
import { emailValidation, passwordValidation } from '../../variables'
import Copyright from '../Copyright/Copyright'
import { Error } from './Authorization.style'

export interface LoginProps {
  changeView: () => void
}

const Login: React.FC<LoginProps> = ({ changeView }) => {
  const intl = useIntl()
  const dispatch = useAppDispatch()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [requirementsError, setRequirementsError] = React.useState(false)

  const authenticateUser = () => {
    if (
      email.length === 0 ||
      password.length === 0 ||
      !emailValidation.test(email) ||
      !passwordValidation.test(password)
    ) {
      setRequirementsError(true)
    } else {
      const user = {
        email,
        password,
      }
      signIn(user, (response: AuthedUser) => dispatch(setUser(response)))
    }
  }

  return (
    <>
      <Typography component='h1' variant='h5'>
        {intl.formatMessage({ id: 'sign-in' })}
      </Typography>
      <form className='form' noValidate>
        {requirementsError && <Error>{intl.formatMessage({ id: 'incorrect-data' })}</Error>}
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
          name='password'
          label={intl.formatMessage({ id: 'password' })}
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button fullWidth variant='contained' color='primary' className='submitButton' onClick={authenticateUser}>
          {intl.formatMessage({ id: 'sign-in' })}
        </Button>
        <Grid container>
          <Grid item xs>
            <span className='textButton'>{intl.formatMessage({ id: 'forgot-password' })}</span>
          </Grid>
          <Grid item onClick={changeView} className='textButton'>
            {intl.formatMessage({ id: 'no-account-sign-up' })}
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </>
  )
}

export default Login
