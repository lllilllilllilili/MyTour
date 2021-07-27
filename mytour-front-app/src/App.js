import React, { useRef } from "react";
import { Route, Link } from 'react-router-dom';

import Header from "./containers/Header";

import Home from "./containers/Home";
import Routes from './Routes';

import "./App.css";

function App() {
  const inputRef = useRef();

  return (
    <div>
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
