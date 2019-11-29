import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer} from './HomeStyle'
// import Button from '../../components/Button/Button';
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card';

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
      <HomeContainer flexDirection={'column'} alignItems={'center'}>
        <MapContainer/>
        <Card 
        imgSrc={"https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"} 
        title={"joao"}
        sexo={"masculino"}
        age={"2 meses"}
        />
      </HomeContainer>
    )
      
  }
}