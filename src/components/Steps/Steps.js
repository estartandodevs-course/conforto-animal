import React,{useState} from 'react';
import Stepper from 'react-js-stepper'


const Steps =()=>{
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

          <div style={{marginTop: '40px'}}>
          {activeStep === 1 ? <div style={{backgroundColor:'red',width:'200px',
          height:"100px"}}>Hello</div> : 
            activeStep === 2 ? <div>GoodBye</div> :
            <div>Welcome!!</div>
          }
          </div>

          <div style={{marginTop: '20px'}}>
              <input type="button" value={activeStep === steps.length ? 'terminou k7' : 'proximo'} 
                      onClick={activeStep === steps.length ? null : handleOnClickNext}/>
              {activeStep ===1 ? '' : <input type="button" value="Back" onClick={handleOnClickBack} /> }
          </div>
      </>
  )
}
export default Steps