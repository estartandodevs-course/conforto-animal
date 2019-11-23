import React from 'react';
import './style.css';

export default function Modal(props) {
  return (
    <div style={{left: props.show ? 0 : "100vw"}}>
        <h1>Hello</h1>
    </div>
  );
}
