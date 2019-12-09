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
import ErrorScreen from './containers/ErrorScreen/ErrorScreen.js';
import ChatScreen from './containers/ChatScreen/ChatScreen.js';


export default function Routers() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/conforto-animal" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/spl" component={SplashScreen}/>
        <Route path="/adoption" exact component={AdoptionContainer}/>
        <Route path="/adoption/:key" component={AdoptionContainer}/>
        <Route path="/donate" component={DonateContainer}/>
        <Route path="/chat" component={ChatScreen}/>
        <Route path="*" component={ErrorScreen}/>

        
      </Switch>
    </BrowserRouter>
  )
}