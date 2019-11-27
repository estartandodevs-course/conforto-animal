import React from 'react'
import { ButtonContainer } from './ButtonStyle'

const Button = (props) =>{
    
    return (
        <ButtonContainer>
            {props.value}
            {props.style}
            {props.onChange}
        </ButtonContainer>
    )

}

export default Button


{/* <Button value={"Quero Adotar"}/> */}
