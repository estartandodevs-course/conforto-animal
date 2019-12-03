import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import SplashContainer from '../SplashScreen/Splash'
import {HomeContainer, HomeAside} from './HomeStyle'
// import Button from '../../components/Button/Button';
<<<<<<< HEAD
// import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card';

=======
import Button from '../../components/Button/Button'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
>>>>>>> SliderComponent
export default class Home extends Component {
  
  state={
<<<<<<< HEAD
    splash: (window.location.pathname ==="/" ? true : false),
    pets: [
      {
        imgSrc:"https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
        title:"joao",
        sexo:"masculino",
        age:"2 meses"
      },
      {
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjRRYDaRnqNMVld63XRuAkuGouffg_yjBm5ReBhR2NXXR5aQdt",
        title:"jaja",
        sexo:"masculino",
        age:"2 meses"
      }
    ]
=======
    content:[],
    splash: (window.location.pathname ==="/" ? true : false)
>>>>>>> SliderComponent
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
<<<<<<< HEAD
    const {splash, pets} = this.state
    
=======
    const {splash,logout,content} = this.state
>>>>>>> SliderComponent
    return(
      splash ? <SplashContainer/> 
      :<div>
      <HomeContainer flexDirection={'column'}>
<<<<<<< HEAD
        <MapContainer/>
        <HomeAside flexDirection={'column'} alignItems={'center'}>
          {pets.map((pet, index)=> {
            return(
              <Card 
              key={index}
              imgSrc={pet.imgSrc}
              title={pet.title}
              sexo={pet.sexo}
              age={pet.age}
              />
            )})
          }
        </HomeAside>
=======
        <Header/>)
        <MapContainer/>
        <Button onClick={logout}>Fazer Logout</Button>
>>>>>>> SliderComponent
      </HomeContainer>
      <SliderComponent content={this.state.content}/>
      </div>
    )
  }
}