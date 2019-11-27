import React from 'react'
import { ButtonContainer } from './ButtonStyle'

const Button = (props) =>{
    
    return (
        <ButtonContainer className={props.className} onClick={props.onClick}>
            {props.children}
        </ButtonContainer>
    )

}

export default Button

