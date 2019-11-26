import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import {HomeContainer} from './HomeStyle'
import Button from '../../components/Button/Button'
export default class Home extends Component {
  render() {
    return(
      <HomeContainer flexDirection={'column'}>
        <MapContainer/>
        <Button value={"Quero Adotar"}/>

      </HomeContainer>
    )
  }
}