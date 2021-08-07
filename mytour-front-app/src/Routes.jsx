import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './Pages/Home';
import Login from './components/auth/Login';
import TourRouteIndex from './components/tourRoute/TourRouteIndex'
import Signup from './Pages/Auth/Signup';
//import EmailSignup from './components/auth/EmailSignup'
import EmailSignupContainer from "./containers/EmailSignupContainer"
import EmailSignup from './containers/auth/EmailSignup'

import Review from './Pages/Review/Review'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route path="/review" component={Review}/>
      <Route path="/mytour" component={TourRouteIndex}/>
      <Route exact path="/signup" component={Signup} />
      <Route path="/email_sign_up" component={EmailSignupContainer}/>
    </Switch>
  )
}

export default Routes;