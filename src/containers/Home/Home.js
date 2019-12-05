import React, { Component } from 'react'
import MapComponent from '../../components/MapComponent/MapComponent';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer, HomeAside} from './HomeStyle'
import Card from '../../components/Card/Card';
import {firebase} from '../../firebase'
export default class Home extends Component {
  
  state={
    splash: (window.location.pathname ==="/" ? true : false),
    dogs: [], 
    cats: [],
    locations: [],
  }
  
  componentDidMount(){
    setTimeout(()=>{this.setState({splash: false})},2000);    
  }

  componentWillMount(){
    this.getDogs()
    this.getCats()
  }

  getDogs = async ()=>{
    await firebase.database().ref('pets/dog')
    .on('value', (snapshot)=>{
      let res = snapshot.val()
      let dogs = Object.keys(res).map(key => res[key])  
      this.setState({dogs: dogs})            
    })
  }

  getCats = async ()=>{
    await firebase.database().ref('pets/cat')
    .on('value', (snapshot)=>{
      let res = snapshot.val()
      let cats = Object.keys(res).map(key => res[key])
      this.setState({cats: cats})            
    })
  }

  render() {
    const {splash, dogs, cats} = this.state

    return(
      splash ? <SplashContainer/> 
      :
      <HomeContainer flexDirection={'column'}>
        <MapComponent />
        <HomeAside flexDirection={'column'} alignItems={'center'}>
          {dogs.map((pet, index)=> {
            return(
              <Card 
              key={index}
              imgSrc={pet.imgSrc}
              title={pet.name}
              sexo={pet.sexo}
              age={pet.age}
              />
            )})
          }
          {
            cats.map((pet, index)=> {
              return(
                <Card 
                key={index}
                imgSrc={pet.imgSrc}
                title={pet.name}
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