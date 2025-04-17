import React, { useState } from 'react'

function CheckOutStepper({stepsConfig}) {

  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  // if the length of the config steps is null
  if(!stepsConfig.length){
    return <></>
  }

  const handleNextStep = () => {
    if(currentStep === stepsConfig.length){
      setIsCompleted(true);
    }else{
      setCurrentStep(currentStep + 1);
    }
  }

  // creating active component which is a component that is used to display the active step
  const ActiveComponent = stepsConfig[currentStep-1]?.Component;
  return (
    <>
      <div className='stepper-container'>
        {stepsConfig.map((step,index) => (
          // if the current step is greater than the index + 1 or the isCompleted is true then the step is complete
          // if the current step is equal to the index + 1 then the step is active
          <div key={index} className={`step ${currentStep>index+1 || isCompleted ? "complete" : ""} 
          ${currentStep === index+1 ?"active":""}`}>
            <h3 className='step-number'>{
              currentStep>index+1 || isCompleted ? <span>&#10003;</span> : index+1
              }</h3>
            <p className='step-name'>{step.name}</p>
          </div>
        ))}

        <div className='progress-bar'>
          <div className='progress' style={{width: `${(currentStep/stepsConfig.length)*100}%`}}></div>
        </div>
      </div>
      {/* active component */}
      {ActiveComponent && <ActiveComponent />}

      {/* button for next and previous */}
      <div className='button-container'>
        <button className='button' onClick={() => {setCurrentStep(currentStep - 1),setIsCompleted(false)}}>Previous</button>
        {!isCompleted && <button onClick={handleNextStep} className='button'>{currentStep === stepsConfig.length ? 'Finish' : 'Next'}</button>}
      </div>
    </>
  )
}

export default CheckOutStepper
