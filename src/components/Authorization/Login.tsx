import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import * as React from 'react'
import { useIntl } from 'react-intl'
import Copyright from './Copyright'

export interface LoginProps {
  changeView: () => void
}

const Login: React.FC<LoginProps> = ({ changeView }) => {
  const intl = useIntl()

  return (
    <>
      <Typography component='h1' variant='h5'>
        {intl.formatMessage({ id: 'sign-in' })}
      </Typography>
      <form className='form' noValidate>
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
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className='submitButton'
        >
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
