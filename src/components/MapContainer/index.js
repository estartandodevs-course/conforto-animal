import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  }; 

export class MapContainer extends Component{
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: -22.9068467, lng: -43.1728965}}
            >
                <Marker position={{ lat: -23.0018679, lng: -43.6359817}} 
                title={'conforto animal'}
                icon={{
                    url: "https://img.icons8.com/wired/64/000000/jake.png",
                    anchor: new window.google.maps.Point(32, 32),
                    scaledSize: new window.google.maps.Size(64,64)
                  }}
                />
            </Map>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDWBfhtb9khVbng8lfRBWqvLANrxq1YvSs"
})(MapContainer)