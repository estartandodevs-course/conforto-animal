import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import { GetStorageUser, LogOutFacebook, LogOutGoogle } from '../../firebase'
import { Link } from 'react-router-dom';
import { ProfileName0, ProfileContainer, ProfileMain, ProfilePhoto, ProfileComponent, ProfileDonate,Section } from '../../containers/Profile/Profilestyled'
import { ProfileImg } from '../../components/Header/HeaderStyle'
import Button from '../../components/Button/Button';
const ProfileScreen = () => {
    // const [showMenu, setShowMenu] = useState(false)
    const [user] = useState(GetStorageUser())

    return (
        <ProfileContainer justifyContent={'space-around'}>
            <ProfileMain>
                <ProfilePhoto>
                    {user && <ProfileImg className='ProfileImg' src={user.photoURL} />}
                    {user && <ProfileName0 className='ProfileName0'>{user.displayName}</ProfileName0>}
                </ProfilePhoto>

                <ProfileComponent>
                    <ProfileName0 className='ProfileName0'>Telefone:</ProfileName0>
                    <div className='label'>
                        <Input name={'Telefone'} type={'number'} />
                    </div>
                </ProfileComponent>

                <ProfileComponent className='componentNulo'>
                    <ProfileName0 className='ProfileName0'>Endereço:</ProfileName0>
                    <div className='label'>
                        <Input name={'Endereço'} type={'Text'} />
                    </div>
                </ProfileComponent>

                <ProfileComponent>
                    <ProfileName0 className='ProfileName0'>Email:</ProfileName0>
                    <div className='label'>
                        {user && <ProfileName0 className='ProfileName0'>{user.email}</ProfileName0>}
                    </div>
                </ProfileComponent>

                <Link to='/login'><Button className='ButtonProfile'
                    value="Logout / Login"
                    action={() => { LogOutFacebook() && LogOutGoogle() }
                    } /></Link>             
            </ProfileMain>

            <ProfileDonate>
                    <Section >
                        Minhas Doações
                    </Section>
            </ProfileDonate>
        </ProfileContainer> 
    )
}
export default ProfileScreen

