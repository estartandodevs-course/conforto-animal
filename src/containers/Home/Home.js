import React, { Component } from "react";
import MapComponent from "../../components/MapComponent/MapComponent";
import SplashContainer from "../SplashScreen/Splash";
import { HomeContainer, HomeAside } from "./HomeStyle";
import Card from "../../components/Card/Card";
import { PetService } from "../../services/pets";
export default class Home extends Component {
  state = {
    splash: window.location.pathname === "/" ? true : false,
    dogs: [],
    cats: [],
    locations: []
  };

  petService = new PetService();

  componentDidMount() {
    setTimeout(() => {
      this.setState({ splash: false });
    }, 2000);
    this.petService.Dogs.subscribe(dogs => this.setState({ dogs }));
    this.petService.Cats.subscribe(cats => this.setState({ cats }));
  }

  teste = () => {
    console.log(this.getCats);
  };

  render() {
    const { splash, dogs, cats } = this.state;

    return splash ? (
      <SplashContainer />
    ) : (
      <HomeContainer flexDirection={"column"}>
        <MapComponent
          cats={cats.map(item => ({ ...item.location }))}
          dogs={dogs.map(item => ({ ...item.location }))}
        />
        <HomeAside flexDirection={"column"} alignItems={"center"}>
          {dogs.map((pet, index) => {
            return (
              <Card
                key={index}
                imgSrc={pet.imgSrc}
                title={pet.name}
                sexo={pet.sexo}
                action={this.teste}
                age={pet.age}
              />
            );
          })}
          {cats.map((pet, index) => {
            return (
              <Card
                key={index}
                imgSrc={pet.imgSrc}
                title={pet.name}
                sexo={pet.sexo}
                age={pet.age}
                action={this.teste}
              />
            );
          })}
        </HomeAside>
      </HomeContainer>
    );
  }
}
