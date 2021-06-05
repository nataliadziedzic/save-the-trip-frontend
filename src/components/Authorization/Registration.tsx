import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import * as React from 'react'
import Copyright from './Copyright'

export interface RegistrationProps {
  changeView: () => void
}

const Registration: React.FC<RegistrationProps> = ({ changeView }) => {
  return (
    <>
      <Typography component='h1' variant='h5'>
        Sign up
      </Typography>
      <form className='form' noValidate>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
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
          label='Password'
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
          label='Confirm password'
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
          Sign Up
        </Button>
        <Grid container>
          <Grid item onClick={changeView} className='textButton'>
            {'Already have an account? Sign In'}
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
