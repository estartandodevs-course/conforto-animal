import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Home from './containers/Home/Home.js';
import SplashScreen  from './containers/SplashScreen/Splash.js';
import Login from './containers/Login/Login.js';
import AdoptionContainer from './containers/Adoption/Adoption'
import DonateContainer from './containers/Donate/Donate'
import Header from './components/Header/Header'


export default function Routers() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
      <Route path="/login" component={Login}/>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/spl" component={SplashScreen}/>
        <Route path="/adoption" component={AdoptionContainer}/>
        <Route path="/donate" component={DonateContainer}/>
      </Switch>
    </BrowserRouter>
  )
}