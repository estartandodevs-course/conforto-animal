import React from 'react'
import { ButtonContainer } from './ButtonStyle'

const Button = (props) =>{
    
    return (
        <ButtonContainer>
            {props.value}
        </ButtonContainer>
    )

}

export default Button


{/* <Button value={"Enviar"}/> */}
