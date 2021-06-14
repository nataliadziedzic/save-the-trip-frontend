import React from 'react'
import { IntlProvider } from 'react-intl'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { changeLanguage } from '../../redux/slices/language'
import englishMessages from '../../languages/en.json'
import polishMessages from '../../languages/pl.json'
import Authorization from '../Authorization/Authorization'
import ErrorSnackbar from '../Snackbars/ErrorSnackbar'
import WarningSnackbar from '../Snackbars/WarningSnackbar'
import SuccessSnackbar from '../Snackbars/SuccessSnackbar'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import TripsPanel from '../TripsPanel/TripsPanel'
import { setAuthed } from '../../redux/slices/authed'
import { setNewToken } from '../../api/authorization.api'
import { setUser } from '../../redux/slices/user'
import { AuthedUser } from '../../types'

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
      <div className='App'>
        <Router>
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
    </IntlProvider>
  )
}

export default App
