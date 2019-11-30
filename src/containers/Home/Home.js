import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer, HomeAside} from './HomeStyle'
// import Button from '../../components/Button/Button';
// import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card';

export default class Home extends Component {

  state={
    splash: (window.location.pathname ==="/" ? true : false),
    pets: [
      {
        imgSrc:"https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
        title:"BOB",
        sexo:"Masculino",
        age:"2 Meses"
      },
   
    ]
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({splash: false})},2000)    
  }
  logout=()=>{
    localStorage.clear();
    window.location.href = '/login';
  }
  render() {
    const {splash, pets} = this.state
    
    return(
      splash ? <SplashContainer/> 
      :
      <HomeContainer flexDirection={'column'}>
        <MapContainer/>
        <HomeAside flexDirection={'column'} alignItems={'center'}>
          {pets.map(pet=> {
            return(
              <Card 
              imgSrc={pet.imgSrc}
              title={pet.title}
              sexo={pet.sexo}
              age={pet.age}
              />
            )})
          }
        </HomeAside>
      </HomeContainer>
    )
      
  }
}