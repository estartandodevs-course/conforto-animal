import React from 'react'
import { ButtonContainer } from './ButtonStyle'

const Button = (props) =>{
    
    return (
        <ButtonContainer className={props.className} onClick={props.onClick} value={props.value}>
<<<<<<< HEAD
            {props.value}
=======
            {/* {props.children} */} {props.value}
>>>>>>> develop
        </ButtonContainer>
    )

}

export default Button

