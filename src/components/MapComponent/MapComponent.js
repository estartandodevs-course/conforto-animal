import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import MapContainer from "./MapContainer";
import cachorro from "../../assets/images/cachorro.svg";
import gato from "../../assets/images/gato.svg";
export default class MapComponent extends Component {
  state = {
    positions: [],
    isDog: false
  };

  getDogsCoords = async _dogs => {
    let dogs = Object.keys(_dogs).map(key => _dogs[key]);
    let coords = dogs.map(res => res.location);
    let positions = this.state.positions;
    coords.map(position => {
      return positions.push({
        ...position,
        type: "dog"
      });
    });

    this.setState({
      positions: positions
    });
  };

  getCatsCoords = async _cats => {
    let cats = Object.keys(_cats).map(key => _cats[key]);
    let coords = cats.map(res => res.location);
    let positions = this.state.positions;
    coords.map(position => {
      return positions.push({
        ...position,
        type: "cat"
      });
    });

    this.setState({
      positions: positions
    });
  };

  static defaultProps = {
    center: {
      lat: -22.9993,
      lng: -43.6399
    },
    zoom: 8
  };

  _onclick = ({ lat, lng }) => {
    const _positions = Object.assign([], this.state.positions);
    _positions.push({ lat, lng });
    this.setState({
      positions: _positions
    });
  };

  render() {
    const { cats = [], dogs = [] } = this.props;
    return (
      <MapContainer>
        <GoogleMapReact
          // onClick={this._onclick}
          bootstrapURLKeys={{ key: "AIzaSyDWBfhtb9khVbng8lfRBWqvLANrxq1YvSs" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {dogs.map((pos, index) => (
            <MyMarker
              animal={cachorro}
              key={index}
              lat={pos.lat}
              lng={pos.lng}
              title={"cachorro"}
            />
          ))}

          {cats.map((pos, index) => (
            <MyMarker
              animal={gato}
              key={index}
              lat={pos.lat}
              lng={pos.lng}
              title={"gato"}
            />
          ))}
        </GoogleMapReact>
      </MapContainer>
    );
  }
}