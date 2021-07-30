import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './containers/auth/Login';
import TourRouteIndex from './containers/tourRoute/TourRouteIndex'
import Signup from './Pages/Auth/Signup';
import EmailSignup from './containers/auth/EmailSignup'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route path="/mytour" component={TourRouteIndex}/>
      <Route exact path="/signup" component={Signup} />
      <Route path="/email_sign_up" component={EmailSignup}/>
    </Switch>
  )
}

export default Routes;