import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import {HomeContainer} from '../../styles'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <MapContainer/>
      </HomeContainer>
    );
  }
}