import { Box, Button, Grid, TextField, Typography } from '@material-ui/core'
import * as React from 'react'
import Copyright from './Copyright'

export interface LoginProps {
  changeView: () => void
}

const Login: React.FC<LoginProps> = ({ changeView }) => {
  return (
    <>
      <Typography component='h1' variant='h5'>
        Sign in
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
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className='submitButton'
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <span className='textButton'>Forgot password?</span>
          </Grid>
          <Grid item onClick={changeView} className='textButton'>
            {"Don't have an account? Sign Up"}
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
