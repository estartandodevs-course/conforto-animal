import React from 'react'
import { ButtonContainer } from './ButtonStyle'

const Button = (props) =>{
    
    return (
        <ButtonContainer style={props.style}>
            {props.children}
        </ButtonContainer>
    )

}

export default Button

// Botões *exeto da página home!! 

{/* <Button style={{
         width:"100%",
         borderRadius:"0",
         bottom: "0",
         position: "fixed",
         height: "55px",
         fontSize: "18px"}}>

          Quero Adotar
        </Button> */}

