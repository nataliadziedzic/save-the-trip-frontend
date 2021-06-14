import React from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeLanguage } from '../../redux/slices/language'
import { setAuthed } from '../../redux/slices/authed'
import { setUser } from '../../redux/slices/user'
import englishMessages from '../../languages/en.json'
import polishMessages from '../../languages/pl.json'

import { StylesProvider } from '@material-ui/core'
import { GlobalStyle } from '../../assets/styles/globalStyles'
import { setNewToken } from '../../api/authorization.api'
import { AuthedUser } from '../../types'

import Authorization from '../Authorization/Authorization'
import ErrorSnackbar from '../Snackbars/ErrorSnackbar'
import WarningSnackbar from '../Snackbars/WarningSnackbar'
import SuccessSnackbar from '../Snackbars/SuccessSnackbar'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import TripsPanel from '../TripsPanel/TripsPanel'
import Header from '../Header/Header'

const App = () => {
  const { language } = useAppSelector(state => state.language)
  const { authed } = useAppSelector(state => state.authed)
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (navigator.language === 'pl') {
      dispatch(changeLanguage(polishMessages))
    } else {
      dispatch(changeLanguage(englishMessages))
    }
    setNewToken((response: AuthedUser) => dispatch(setUser(response)))
  }, [dispatch])

  React.useEffect(() => {
    if (Object.values(user).some(value => value === null)) {
      dispatch(setAuthed(false))
    } else {
      dispatch(setAuthed(true))
    }
  }, [user, dispatch])

  return (
    <IntlProvider locale={navigator.language || 'en'} messages={language}>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <div className='App'>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/auth'>
                {authed ? <Redirect to='/' /> : <Authorization />}
              </Route>
              <PrivateRoute authed={authed} path='/' component={TripsPanel} />
            </Switch>
          </Router>
          <ErrorSnackbar />
          <WarningSnackbar />
          <SuccessSnackbar />
        </div>
      </StylesProvider>
    </IntlProvider>
  )
}

export default App
