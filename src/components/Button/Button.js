import React from 'react'
import { ButtonContainer } from './ButtonStyle'

const Button = (props) =>{
    
    return (
        <ButtonContainer className={props.className} onClick={props.onClick} value={props.value}>
            {/* {props.children} */} {props.value}
        </ButtonContainer>
    )

}

export default Button

