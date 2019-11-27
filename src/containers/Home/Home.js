import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer} from './HomeStyle'
import Header from '../../components/Header/Header'
<<<<<<< HEAD
import Button from '../../components/Button/Button';
=======
import {firebase, LoginFacebook} from '../../firebase'

>>>>>>> develop
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
        <Button className="btn-bottom" >Adote</Button>
        <MapContainer/>
      </HomeContainer>
    )
      
  }
}