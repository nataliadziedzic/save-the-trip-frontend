import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export interface PrivateRouteProps {
  component: React.FC<any>
  authed: boolean
  path: string
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ authed, component: Component, path }) => {
  return (
    <Route
      exact
      path={path}
      render={props => (authed === true ? <Component {...props} /> : <Redirect to={{ pathname: '/auth' }} />)}
    />
  )
}

export default PrivateRoute
