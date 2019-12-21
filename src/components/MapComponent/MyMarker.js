import React from 'react';

export default function MyMarker(props) {

    const greatPlaceStyle = {
    width:40,
    height:40,
      }

    return (
        <div>
          <img alt="Marcador" style={greatPlaceStyle} src={props.animal} />
        </div>
      );
}