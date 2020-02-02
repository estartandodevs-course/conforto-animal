import React, { useState, useEffect } from 'react'
import {ChatContainer, HomeAside} from './ChatScreenStyle';
import ChatList from '../../components/ChatList/ChatList';
import {GetStorageUser} from '../../firebase';
import { ChatService } from '../../services/chat'
import ChatRoom from '../../models/ChatRoom'

const ChatScreen = () => {

  const chatService = new ChatService()

  const [chatRooms, setChatRooms] = useState([])
  
  useEffect(()=>{
    getRooms()
    console.log(chatRooms);
  },[])

  const getRooms = async ()=>{
    await chatService.ChatRooms.subscribe(res=> setChatRooms(res))    
    // console.log(res);
    console.log(chatRooms);

    // this.petService.Dogs.subscribe(dogs => this.setState({ dogs }));
  }
  
  return(
  
    <ChatContainer flexDirection={'column'}>
      
      <HomeAside flexDirection={'column'} alignItems={'center'}>
        
      </HomeAside>
    </ChatContainer>
  )      
}

export default ChatScreen
