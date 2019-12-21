import React, { Component } from 'react'
import {ChatContainer} from './ChatScreenStyle';
import {HomeAside} from './chatscreenstyle2';
import ChatList from '../../components/ChatList/ChatList';
import {GetStorageUser} from '../../firebase'

export default class ChatScreen extends Component {

  state={
    chats: [
      {
        imgSrc:"https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
        name:"Juliana Peixoto",
        message:"Me interessei pela sua doguinea!",
        
      },
      {
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjRRYDaRnqNMVld63XRuAkuGouffg_yjBm5ReBhR2NXXR5aQdt",
        name:"Victor Souza",
        message:"É um Poodle castrado.",
        
      },
      {
        imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjRRYDaRnqNMVld63XRuAkuGouffg_yjBm5ReBhR2NXXR5aQdt",
        name:"Luan Ferreira",
        message:"Ok. Amanhã nós encontramos...",
        
      },
    ],
    user:GetStorageUser(),
  }

  

  componentDidMount(){
   //antes de montar   
  }
   //(this.state.user.photoURL) quando for usar tenta usar isso e ve se vai .... se n for me chama ( define isso em um src)

  render() {
    const {chats} = this.state
    
    return(
    
      <ChatContainer flexDirection={'column'}>
        
        <HomeAside flexDirection={'column'} alignItems={'center'}>
          {chats.map(chat=> {
            return(
              <ChatList 
              imgSrc={this.state.user.photoURL}
              name={chat.name}
              mensagem={chat.message}  
              
              />
            )})
          }
        </HomeAside>
      </ChatContainer>
    )
      
  }
}