import React from 'react'
import { CardContainer, Title } from './CardStyle'

const Card = (props)=>{

    return (
        <CardContainer >
            <Title>
                {props.title}
            </Title>
        </CardContainer>
    )
}

export default Card