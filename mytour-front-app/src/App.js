import React, { useRef } from "react";
import { Route, Link } from 'react-router-dom';

import Header from "./containers/Header";

import Home from "./containers/Home";
import Login from "./containers/auth/Login";
import Signup from "./containers/auth/Signup";
import EmailSignup from "./containers/auth/EmailSignup";
import TourRouteIndex from './containers/tourRoute/TourRouteIndex'

import "./App.css";

function App() {
  const inputRef = useRef();

  return (
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login} />
      <Route path="/mytour" component={TourRouteIndex}/>
      <Route exact path="/signup" component={Signup} />
      <Route path="/email_sign_up" component={EmailSignup}/>
    </div>
  );
}

export default App;
