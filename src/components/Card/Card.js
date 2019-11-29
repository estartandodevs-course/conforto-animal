import React from 'react'
import { CardContainer, Title } from './CardStyle'

const Card = (props)=>{

    return (
        <CardContainer >
            <Title>
                {props.title}
            </Title>
        <img>
            {props.img}
        </img>
        </CardContainer>
    )
}

export default Card