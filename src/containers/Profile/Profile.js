import React, { useState } from 'react'
import  Login from '../Login/Login'
import Input from '../../components/Input/Input'
import {ButtonContainer} from '../../components/Button/ButtonStyle'
import { GetStorageUser } from '../../firebase'
import { ProfileName0, ProfileContainer, ProfileMain, ProfilePhoto, ProfileComponent, buttonProfile } from '../../containers/Profile/Profilestyled'
import {ProfileImg}  from '../../components/Header/HeaderStyle'
// import firebase from './firebase.js'

const ProfileScreen = () => {
    const [user] = useState(GetStorageUser())

    return (
        <ProfileContainer justifyContent={'space-around'}>
            <ProfilePhoto>
                {user && <ProfileImg src={user.photoURL} />}
                {user && <ProfileName0>{user.displayName}</ProfileName0>}
            </ProfilePhoto>

            <ProfileMain>
                <ProfileComponent>
                    <ProfileName0>Telefone:</ProfileName0>
                    <div className='label'>
                        <Input name={'Telefone'} type={'number'} />
                    </div>
                </ProfileComponent>

                <ProfileComponent className='componentNulo'>
                    <ProfileName0>Endereço:</ProfileName0>
                    <div className='label'>
                        <Input name={'Endereço'} type={'Text'} />
                    </div>
                </ProfileComponent>

                <ProfileComponent>
                    <ProfileName0>Email:</ProfileName0>
                    <div className='label'>
                        <Input name={'Email'} type={'Email'} />
                    </div>
                </ProfileComponent>

                      
            </ProfileMain>

        </ProfileContainer>
    )
}

const Toggle = props => {
    const [checked, setChecked] = useState(false)
    return   <ButtonContainer className='ButtonProfile' onClick={() => setChecked(!checked)}>Alterar forma de login {JSON.stringify(checked)} </ButtonContainer> 
}           

function Botao () {
        return (
            <div className='app'>
            <Toggle/>
        </div>
    
        )
}
//export default ProfileScreen
        //para a tela voltar a funcionar tem que chamar essa funçao acima

export default Botao
