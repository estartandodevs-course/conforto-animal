import React from 'react';

export default function MyMarker(props) {

    const greatPlaceStyle = {
    width:35,
    height:35,
      }

    return (
        <div>
          <img alt="Marcador" style={greatPlaceStyle} src={props.animal} />
        </div>
      );
}