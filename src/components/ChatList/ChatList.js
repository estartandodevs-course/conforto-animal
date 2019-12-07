import React from 'react'
import { ChatListContainer, Title, About, PersonImg, Description, Topic } from './ChatListStyle'

const ChatList = (props)=>{
    return (
        <ChatListContainer >
            <PersonImg src={props.imgSrc}/>    
            <About >
                <Title>
                    {props.name}
                </Title>
                <Description>
                    <Topic className="msg"><PersonImg className="icon" />{props.mensagem}</Topic>
                </Description>
               
            </About>
        </ChatListContainer>
    )
}

export default ChatList