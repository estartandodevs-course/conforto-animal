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
      <button style={btnStyle} onClick={this.toggleModal}>VER MODAL</button>

    <Modal show={this.state.showModal}>
      <div style={modalStyle}>
        <h1>Hello</h1>
        <p>OLA</p>
        <button style={btnStyle} onClick={this.toggleModal}>ok</button>
      </div>
    </Modal>
    </>
  }
}
const modalStyle = {
  backgroundColor:'white',
  width:'250px',
  height:'250px',
  borderRadius:'20px',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
};
const btnStyle = {
  border:'none',
  borderRadius:'20px',
  minWidth:'100px',
  height:'40px',
  marginTop:'10px',
  backgroundColor:'#189981',
  outline:'none',
}