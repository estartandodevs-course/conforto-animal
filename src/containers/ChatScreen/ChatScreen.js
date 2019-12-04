import React, { Component } from 'react'
import MapContainer from '../../components/MapContainer';
import {ChatContainer} from './ChatScreenStyle';
import {HomeAside} from './chatscreenstyle2';
import ChatList from '../../components/ChatList/ChatList';

export default class ChatScreen extends Component {

  state={
    chats: [
      {
        imgSrc:"https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
        name:"Juliana Peixoto",
        message:"masculino",
        
      },
      {
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjRRYDaRnqNMVld63XRuAkuGouffg_yjBm5ReBhR2NXXR5aQdt",
        name:"Victor Souza",
        message:"masculino",
        
      },
    ]
  }

  componentDidMount(){
   //antes de montar   
  }
  

  render() {
    const {chats} = this.state
    
    return(
    
      <ChatContainer flexDirection={'column'}>
        
        <HomeAside flexDirection={'column'} alignItems={'center'}>
          {chats.map(chat=> {
            return(
              <ChatList 
              imgSrc={chat.imgSrc}
              name={chat.name}
              mensagem={chat.mensagem}
              
              />
            )})
          }
        </HomeAside>
      </ChatContainer>
    )
      
  }
}