import React from 'react'
import { CardContainer } from './CardStyle'

const Card = (props)=>{

    return (
        <CardContainer >
            {props.children}
        </CardContainer>
    )
}

export default Card