import React from 'react';
import { SplashContainer } from './SplashStyle.js';
import { Lang } from '../../shared/pt'
import logo from '../../assets/images/logo.png'

const SplashScreen = () =>
  <SplashContainer justifyContent={'center'} alignItems={'center'}>
    <img src={logo}/>
    <h1>Conforto Animal</h1>
  </SplashContainer>
export default SplashScreen
