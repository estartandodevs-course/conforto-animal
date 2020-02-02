import { BehaviorSubject } from "rxjs";
import { firebase } from "../../firebase";
import { ChatRoom } from "../../models/ChatRoom";

 let ChatRooms = []

export function newChatRoom(userA, userB){
    firebase
    .database()
    .ref("chatRoom")
    .push(new ChatRoom(userA, userB))
}

export async function getChatRooms(){
    await firebase
    .database()
    .ref("chatRoom")
    .on("value", snapshot =>{
        let res = snapshot.val()
        ChatRooms = Object.keys(res).map(key=> res[key] = {...res[key], keyRoom: key});
        console.log(ChatRooms)
    })
    return ChatRooms
}

export class ChatService{
    ChatRooms = new BehaviorSubject([])

    constructor(){
        this.getChatRooms()
    }

    getChatRooms = async () =>{
        await firebase
        .database()
        .ref("chatRoom")
        .on("value", snapshot =>{
            let res = snapshot.val()
            ChatRooms = Object.keys(res).map(key=> res[key] = {...res[key], keyRoom: key});
            this.ChatRooms.next(ChatRooms)
        })
    }

}