import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import {HomeContainer} from './HomeStyle'
import Modal from '../../components/Modal/Modal';

export default class Home extends Component {
 state={
   showModal:false
 }
  getLocation=()=>{
    navigator.geolocation.getCurrentPosition(this.showPosition);
  }
  showPosition=(position)=>{
      alert("LATITUDE"+ ":::"+ position.coords.latitude +"     "+ "LONGITUDE"+ ":::"+ position.coords.longitude)

  }
  toggleModal=()=>{
    this.setState({showModal: !this.state.showModal})
  }
  render() {
    return <>
      <HomeContainer flexDirection={'column'}>
        <MapContainer/>
      </HomeContainer>
      <div onClick={this.getLocation} style={{width:'300px',height:'300px', backgroundColor:'red', cursor:'help'}}>
      <h1>CORDENADA</h1>      
      </div>
      <button onClick={this.toggleModal}>VER MODAL</button>

    <Modal show={this.state.showModal} />
    </>
  }
}