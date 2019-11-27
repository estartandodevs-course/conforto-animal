import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer} from './HomeStyle'
import Header from '../../components/Header/Header'
import {firebase, LoginFacebook} from '../../firebase'

import Button from '../../components/Button/Button'
export default class Home extends Component {

  state={
    splash: true
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({splash: false})},2000)
  }
  render() {
    const {splash} = this.state
    return(
      splash ? <SplashContainer/> 
      :
      <HomeContainer flexDirection={'column'}>
        <Header/>
        <MapContainer/>
        <Button value={"Quero Adotar"}/>

      </HomeContainer>
    )
      
  }
}