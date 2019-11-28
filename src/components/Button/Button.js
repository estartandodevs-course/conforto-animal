import React from 'react'
import { ButtonContainer } from './ButtonStyle'

const Button = (props) =>{
    
    return (
<<<<<<< HEAD
        <ButtonContainer className={props.className} onClick={props.onClick}>
            {props.children}
=======
        <ButtonContainer>
            {props.value}
            {props.style}
            {props.onChange}
>>>>>>> develop
        </ButtonContainer>
    )

}

export default Button

