import React from 'react';
import { SplashContainer } from './SplashStyle.js';
import { Lang } from '../../shared/pt'

const SplashScreen = () =>
  <SplashContainer justifyContent={'center'} alignItems={'center'}>
    <h1>{Lang.welcome}</h1>
  </SplashContainer>
export default SplashScreen
