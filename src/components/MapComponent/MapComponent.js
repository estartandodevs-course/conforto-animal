import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyMarker from './MyMarker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class MapComponent extends Component {
  state={
    position:[
      {
          "Latitude": -19.212355602107472,
          "Longitude": -44.20234468749999
      },
      {
          "Latitude": -22.618827234831404,
          "Longitude": -42.57636812499999
      },
      {
          "Latitude": -22.57825604463875,
          "Longitude": -48.68476656249999
      },
      {   
          "Latitude": -23.0018679, 
          "Longitude": -43.6359817
        },
    ]
  }

  static defaultProps = {
    center: {
      lat: -22.9993,
      lng: -43.6399
    },
    zoom: 11
  };
  _onclick=({lat,lng}) => {
    console.log(lat,lng)
    this.setState({ position: [...this.state.position, {Latidude: lat, Longitude: lng}] })
    console.log(this.state.position)
  }
  
  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          onClick={this._onclick}
          bootstrapURLKeys={{ key:"AIzaSyDWBfhtb9khVbng8lfRBWqvLANrxq1YvSs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.position.map((pos,index)=>{
              return <MyMarker key={index} lat={pos.Latitude} lng={pos.Longitude} 
                title={'conforto animal'}
                />
              })}
        </GoogleMapReact>
      </div>
    );
    }
}