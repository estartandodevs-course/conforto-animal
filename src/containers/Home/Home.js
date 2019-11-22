import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import {HomeContainer} from './HomeStyle'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer flexDirection={'column'}>
        <MapContainer/>
      </HomeContainer>
    );
  }
}