import * as React from 'react'
import Media from 'react-media'
import { CssBaseline, Paper, Grid } from '@material-ui/core'
import logo from '../../assets/images/logo.png'
import Login from './Login'
import Registration from './Registration'
import { Wrapper, InputsWrapper, LogoSection } from './Authorization.style'
import { SIZES } from '../../assets/styles/mediaQueries'

const Authorization: React.FC = () => {
  enum View {
    LOGIN,
    REGISTRATION,
  }
  const [view, setView] = React.useState<View>(View.LOGIN)
  return (
    <Wrapper>
      <Grid container component='main' className='gridContainer'>
        <CssBaseline />
        <Media query={`${SIZES.laptop} and (orientation: landscape)`}>
          {matches =>
            matches ? (
              <>
                <Grid item xs={false} sm={4} md={7} className='image' />
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={5}
                  component={Paper}
                  elevation={6}
                  square
                  className='authorizationContainer'
                >
                  <InputsWrapper>
                    <img src={logo} alt='' className='logo' />
                    {view === View.LOGIN ? (
                      <Login changeView={() => setView(View.REGISTRATION)} />
                    ) : (
                      <Registration changeView={() => setView(View.LOGIN)} />
                    )}
                  </InputsWrapper>
                </Grid>
              </>
            ) : (
              <>
                <LogoSection className='image' />
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  component={Paper}
                  elevation={6}
                  square
                  className='authorizationContainer'
                >
                  <InputsWrapper>
                    <img src={logo} alt='' className='logo' />
                    {view === View.LOGIN ? (
                      <Login changeView={() => setView(View.REGISTRATION)} />
                    ) : (
                      <Registration changeView={() => setView(View.LOGIN)} />
                    )}
                  </InputsWrapper>
                </Grid>
              </>
            )
          }
        </Media>
      </Grid>
    </Wrapper>
  )
}

export default Authorization
