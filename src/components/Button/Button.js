import React from 'react'
import { ButtonContainer } from './ButtonStyle'

const Button = (props) =>{
    
    return (
        <ButtonComponent>
            {props.value}
        </ButtonComponent>
    )

}

export default Button


{/* <Button value={"Enviar"}/> */}