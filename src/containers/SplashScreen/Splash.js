import React from 'react';
import { SplashContainer } from './SplashStyle.js';
import logo from '../../assets/images/logo.png'

const SplashScreen = () =>
  <SplashContainer justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
    <img src={logo} alt=""/>
    <h1>Conforto Animal</h1>
  </SplashContainer>
export default SplashScreen
