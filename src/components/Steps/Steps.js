import React,{useState} from 'react';
import Stepper from 'react-js-stepper'
import './style.scss'

const Steps =(props)=>{

  return(
      <div>
          <Stepper 
              steps={props.steps} 
              activeStep={props.activeStep}
              onSelect={props.onSelect}
              showNumber={true} 
          ></Stepper>

          <div style={props.style}>
            {props.activeStep === 1 ? 
              <div>{props.Steps1}</div> : props.activeStep === 2 ? 
              <div>{props.Steps2}</div> : 
              <div>{props.Steps3}</div>}
          </div>
      </div>
  )
}
export default Steps