import React from 'react'
import { ChatListContainer, Title, About, PersonImg, Description, Topic } from './ChatListStyle'
import Button from '../Button/Button'
import paw from '../../assets/images/paw.png'

const ChatList = (props)=>{
    return (
        <ChatListContainer >
            <PersonImg src={props.imgSrc}/>    
            <About >
                <Title>
                    {props.title}
                </Title>
                <Description>
                    <Topic className="caracter"><PersonImg className="icon" src={paw}/>{props.sexo}</Topic>
                    <Topic className="caracter"><PersonImg className="icon" src={paw}/>{props.age}</Topic>
                </Description>
                <Button value="Quero adotar"/>
            </About>
        </ChatListContainer>
    )
}

export default ChatList