import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Home from './containers/Home/Home.js';
import SplashScreen  from './containers/SplashScreen/Splash.js';
import Login from './containers/Login/Login.js';

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/login" component={Login}/>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/spl" component={SplashScreen}/>
      </Switch>
    </BrowserRouter>
  )
}