import React from 'react';
import cachorro from '../../assets/images/cachorro.png'

export default function MyMarker(props) {

    const greatPlaceStyle = {
    width:30,
    height:30,
    backgroundImage: "url("+ cachorro +")",
    backgroundRepeat: 'no-repeat',
      }

    return (
        <div style={greatPlaceStyle}>
          
        </div>
      );
}

