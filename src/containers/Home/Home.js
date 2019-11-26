import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import {HomeContainer} from './HomeStyle'
import Header from '../../components/Header/Header'

export default class Home extends Component {
  render() {
    return(
      <HomeContainer flexDirection={'column'}>
        <Header/>
        <MapContainer/>
      </HomeContainer>
    )
  }
}