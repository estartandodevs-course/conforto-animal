import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Loading from '../Loading'
import cachorro from '../../assets/images/cachorro.png'
import {MapBox} from './MapStyle'

const mapStyles = {
  width: '100%',
  height: '50vh',
  position: 'relative'
}; 

const loadinStyle={
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export class MapContainer extends Component{
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
    render() {
        return (
          <MapBox>
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: -22.9068467, lng: -43.1728965}}
            >
              {this.state.position.map(pos=>{
              return <Marker position={{ lat: pos.Latitude, lng: pos.Longitude}} 
                title={'conforto animal'}
                icon={{
                    url:cachorro,
                    anchor: new window.google.maps.Point(32, 32),
                    scaledSize: new window.google.maps.Size(32,32)
                  }}
                />
              })}
            </Map>  
          </MapBox>
        );
      }
}

const LoadingContainer = (props) => (
  <div style={loadinStyle}>
    <Loading></Loading>
  </div>
)

export default GoogleApiWrapper({
    apiKey: "AIzaSyDWBfhtb9khVbng8lfRBWqvLANrxq1YvSs",
    LoadingContainer: LoadingContainer
})(MapContainer)