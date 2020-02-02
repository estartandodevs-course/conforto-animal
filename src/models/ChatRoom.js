// import User from './User'

export class ChatRoom{
    constructor(userA, userB){
        this.users = [
            userA, 
            userB            
        ]
        this.messagesRoom = [""]
        this.keyRoom= ""
    }
}

export default ChatRoom