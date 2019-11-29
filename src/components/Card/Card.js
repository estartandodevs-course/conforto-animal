import React from 'react'
import { CardContainer, Title, About, PetImg, Description, Topic } from './CardStyle'
import Button from '../Button/Button'
import paw from '../../assets/images/paw.png'

const Card = (props)=>{
    return (
        <CardContainer >
            <PetImg src={props.imgSrc}/>
            <About >
                <Title>
                    {props.title}
                </Title>
                <Description>
                    <Topic className="caracter"><PetImg className="icon" src={paw}/>{props.sexo}</Topic>
                    <Topic className="caracter"><PetImg className="icon" src={paw}/>{props.age}</Topic>
                </Description>
                <Button value="Quero adotar"/>
            </About>
        </CardContainer>
    )
}

export default Card