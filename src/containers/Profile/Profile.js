import React,{useState} from 'react'
import { GetStorageUser } from '../../firebase'
import { ProfileName0 } from '../../containers/Profile/Profilestyled'
import { ProfileImg } from '../../components/Header/HeaderStyle'
// import firebase from './firebase.js'

const ProfileScreen = ()=>{
const [user] =useState(GetStorageUser())

 return (
     <div>
        {user && <ProfileImg src={user.photoURL}/>}
        {user && <ProfileName0>{user.displayName}</ProfileName0>}
        {user && <div>{user.email}</div>}
      

    </div>
    )
}

export default ProfileScreen