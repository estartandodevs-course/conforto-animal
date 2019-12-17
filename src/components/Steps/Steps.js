import React,{useState} from 'react';
import Stepper from 'react-js-stepper'
import Button from '../Button/Button';


const Steps =(props)=>{
  const steps = [{title:''}, {title: ''}, {title:''}]

  const [activeStep, setactiveStep]=useState(1)

  const handleOnClickStepper = (step) => {
    setactiveStep(step)
  }

  const handleOnClickNext = () => {
      let nextStep = activeStep + 1;
     setactiveStep(nextStep)
  }

  const handleOnClickBack = () => {
      let prevStep = activeStep - 1;
      setactiveStep(prevStep)
  }

  return(
      <>
          <Stepper 
              steps={steps} 
              activeStep={activeStep}
              onSelect={handleOnClickStepper}
              showNumber={true} 
          />

          <div style={props.style}>
            {activeStep === 1 ? 
              <div style={props.styleStep1}>{props.Steps1}</div> : activeStep === 2 ? 
              <div style={props.styleStep2}>{props.Steps2}</div> : 
              <div style={props.styleStep3}>{props.Steps3}</div>}
          </div>

          <div style={{marginTop: '20px'}}>
              {//activeStep === 1 ? '' :
              <Button
              value={activeStep === steps.length ? 'Submit' : 'proximo'}
              action={activeStep === steps.length ? null : handleOnClickNext}
              />}

              {activeStep ===1 ? '' : 
              <Button value="Back" action={handleOnClickBack} /> }
              {Button.value === 'Submit' && Button.action === props.onSubmit}
          </div>
      </>
  )
}
export default Steps