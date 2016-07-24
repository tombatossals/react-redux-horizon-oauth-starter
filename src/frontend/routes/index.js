import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import { Login, Logout } from 'containers/User'
import Layout from 'containers/Layout'
import Youtube from 'components/Youtube'
import Home from 'components/Home'
import RequireAuth from 'containers/RequireAuth'

const Routes = (props) => (
  <Router history={props.history}>
    <Redirect from="/" to="/home" />
    <Route path="/" component={Layout}>
      <Route path="home" component={Home} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="video-search" component={RequireAuth(Youtube)} />
    </Route>
  </Router>
)

Routes.propTypes = {
  history: React.PropTypes.object.isRequired
}

export default Routes
