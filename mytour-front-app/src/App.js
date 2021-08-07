import React, { useRef } from "react";
//import { Route, Link } from 'react-router-dom';

import Header from "./Pages/Header";

import Routes from "./Routes";

import "./App.css";

function App() {
  //const inputRef = useRef();

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
