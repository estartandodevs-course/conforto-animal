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
                    {props.name}
                </Title>
                <Description>
                    <Topic className="msg"><PersonImg className="icon" src={paw}/>{props.mensagem}</Topic>
                </Description>
               
            </About>
        </ChatListContainer>
    )
}

export default ChatList