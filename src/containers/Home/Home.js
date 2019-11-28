import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer} from './HomeStyle'
// import Button from '../../components/Button/Button';
import Button from '../../components/Button/Button'

export default class Home extends Component {

  state={
    splash: (window.location.pathname ==="/" ? true : false)
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({splash: false})},2000)    
  }
  logout=()=>{
    localStorage.clear();
    window.location.href = '/login';
  }
  render() {
    const {splash} = this.state
    return(
      splash ? <SplashContainer/> 
      :
      <HomeContainer flexDirection={'column'}>
        <MapContainer/>
        <Button onClick={this.logout}>Fazer Logout</Button>
      </HomeContainer>
    )
      
  }
}