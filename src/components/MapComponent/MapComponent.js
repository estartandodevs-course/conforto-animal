import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MyMarker from './MyMarker';
import MapContainer from './MapContainer'
export default class MapComponent extends Component {
  state = {
    positions:[
      {
        lat: -22.9993,
        lng: -43.6399
      }
    ]
  }

  static defaultProps = {
    center: {
      lat: -22.9993,
      lng: -43.6399
    },
    zoom: 11
  };

  _onclick=({lat, lng}) => {
    const _positions = Object.assign([], this.state.positions)
    _positions.push({lat, lng})
    this.setState({ positions:  _positions})
  }
  
  render() {
    return (
      <MapContainer>
        <GoogleMapReact
          onClick={this._onclick}
          bootstrapURLKeys={{ key:"AIzaSyDWBfhtb9khVbng8lfRBWqvLANrxq1YvSs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.positions.map((pos,index)=>{
              return <MyMarker key={index} lat={pos.lat} lng={pos.lng} 
                title={'conforto animal'}
                />
              })}
        </GoogleMapReact>
      </MapContainer>
    );
    }
}