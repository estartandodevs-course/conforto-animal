import React from 'react';

export default function MyMarker(props) {

    const greatPlaceStyle = {
    width:30,
    height:30,
    backgroundImage: "url("+ props.animal +")",
    backgroundRepeat: 'no-repeat',
      }

    return (
        <div style={greatPlaceStyle}>
          
        </div>
      );
}