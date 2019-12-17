import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import {ButtonContainer} from '../../components/Button/ButtonStyle'
import { GetStorageUser, LogOutFacebook, LogOutGoogle} from '../../firebase'
import { Link } from 'react-router-dom';
import { ProfileName0, ProfileContainer, ProfileMain, ProfilePhoto, ProfileComponent, ButtonProfile  } from '../../containers/Profile/Profilestyled'
import {ProfileImg}  from '../../components/Header/HeaderStyle'
// import firebase from './firebase.js'
import Button from '../../components/Button/Button';
const ProfileScreen = () => {
    const [showMenu, setShowMenu] = useState(false)
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
                    {user && <ProfileName0>{user.email}</ProfileName0>}
                    </div>
                </ProfileComponent>
        
                <Link to='/login'><Button
                    value="Sair"
                    action={()=>{LogOutFacebook() && LogOutGoogle()}
                    }/></Link>
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
export default ProfileScreen
        //para a tela voltar a funcionar tem que chamar essa funçao acima
Botao()
