import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import MyMarker from './MyMarker';
import MapContainer from './MapContainer'
import {firebase} from '../../firebase'
import cachorro from '../../assets/images/cachorro.png';
import gato from '../../assets/images/gato.png';
export default class MapComponent extends Component {
  state = {
    positions: [],
    isDog: false,
  }
  componentWillMount() {
    this.getDogsCoords()
    this.getCatsCoords()
  }

  getDogsCoords = async () => {
    await firebase.database().ref('pets/dog').on('value', (snapshot) => {
      let res = snapshot.val() 
      let dogs = Object.keys(res).map(key => res[key]) 
      let coords = dogs.map(res => res.location) 
      let positions = this.state.positions
      coords.map(position => {
        positions.push({
        ...position,
        type: "dog"
      })
    })

      this.setState({
        positions: positions
      })
    })
  }

  getCatsCoords = async () => {
    await firebase.database().ref('pets/cat').on('value', (snapshot) => {
      let res = snapshot.val()
      let cats = Object.keys(res).map(key => res[key])
      let coords = cats.map(res => res.location)
      let positions = this.state.positions
      coords.map(position => {
        positions.push({
        ...position,
        type: "cat"
      })
    })

      this.setState({
        positions: positions
      })
      console.log(res)
    })
  }
  static defaultProps = {
    center: {
      lat: -22.9993,
      lng: -43.6399
    },
    zoom: 8
  };
  _onclick = ({lat,lng}) => {
    const _positions = Object.assign([], this.state.positions) 
    _positions.push({lat,lng}) 
    this.setState({
      positions: _positions
    })
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
            return pos.type === "dog" 
              ? 
              <MyMarker animal={cachorro} key={index} lat={pos.lat} lng={pos.lng} title={'cachorro'} />
              : 
              <MyMarker animal={gato} key={index} lat={pos.lat} lng={pos.lng} title={'gato'} />
              })}
        </GoogleMapReact>
      </MapContainer>
    );
    }
}