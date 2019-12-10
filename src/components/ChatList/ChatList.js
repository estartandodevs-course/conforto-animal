import React, {useState} from 'react'
import { ChatListContainer, Title, About, PersonImg, Description, Topic, } from './ChatListStyle'



const ChatList = (props)=>{

    //const [data, setData] = useState(0);

        let d = new Date();
        let hour = d.getHours()-1 +":" + d.getMinutes();
        //setData(hour)    
        console.log(hour)
  //  setdata()
    return (
        <ChatListContainer >
            <PersonImg src={props.imgSrc}/>    
            <About >
                <Title>
                    {props.name}
                </Title>
                <Description>
                    <Topic className="msg"><PersonImg className="icon" />{props.mensagem}</Topic>
                    <div className="span"><span>{hour}</span> <div className="Notification"><small>2</small></div></div>
                </Description>
               
            </About>
        </ChatListContainer>
    )
  
    
}


export default ChatList