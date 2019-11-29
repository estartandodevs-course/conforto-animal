import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer} from './HomeStyle'
import Header from '../../components/Header/Header'
// import Button from '../../components/Button/Button';
import Button from '../../components/Button/Button'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
export default class Home extends Component {
  
  state={
    content:[],
    splash: (window.location.pathname ==="/" ? true : false)
  }
  
  componentDidMount(){
    setTimeout(()=>{this.setState({splash: false})},2000);
    this.loadAnimals()   
  }
  loadAnimals =()=>{
    fetch("http://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json").then(response => response.json()).then(res => this.setState({
      content:res
    })
     ).catch(err => alert("deu erro"))
  }
  logout=()=>{
    localStorage.clear();
    window.location.href = '/login';
  }
  render() {
    const {splash,logout,content} = this.state
    return(
      splash ? <SplashContainer/> 
      :<div>
      <HomeContainer flexDirection={'column'}>
        <Header/>)
        <MapContainer/>
        <Button onClick={logout}>Fazer Logout</Button>
      </HomeContainer>
      <SliderComponent content={this.state.content}/>
      </div>
    )
  }
}