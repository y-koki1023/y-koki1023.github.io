import React,{useState} from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

function History(){
    [activeStep,setActiveStep] = useState(0);

    return(
        <div>
            <p>History</p>
            <Stepper activeStep={activeStep}/>
            
        </div>
    )
}
export default History