import * as React from 'react'
import { useIntl } from 'react-intl'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import Copyright from './Copyright'

export interface RegistrationProps {
  changeView: () => void
}

const Registration: React.FC<RegistrationProps> = ({ changeView }) => {
  const intl = useIntl()
  return (
    <>
      <Typography component='h1' variant='h5'>
        {intl.formatMessage({ id: 'sign-up' })}
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
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className='submitButton'
        >
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
