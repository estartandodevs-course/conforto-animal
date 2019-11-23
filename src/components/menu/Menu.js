import React, {useState} from 'react'



export default function Menu(props) {

    

    return (
    <div style={{display: props.show ? 'flex' : 'none'}}>
          <h1>Hello</h1>
          <button onClick={props.close}>Close</button>
        </div>
    )
}
