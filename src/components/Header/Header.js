import React, {useState} from 'react'
import { HeaderContainer, MenuContainer, ProfileImg, ListMenu} from './HeaderStyle'
import logo from '../../assets/images/logo.png'
import Search from '../../assets/images/search.png'
import Menu from '../../assets/images/menu 1.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import { LogOutFacebook, GetStorageUser } from '../../firebase'

const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const [user, setUser] = useState(GetStorageUser())
    const [optionsMenu, setOptios] = useState([
        {
            text: 'adote',
            route: '/adoption'
        },
        {
            text: 'doe',
            route: '/donate'
        },
        {
            text:'fazer login',
            route: '/login'
        },
        {
            text:'sair',
            route: '/home'
        },
    ])

    const LonkTo = (route)=>{

    }

    return (
        <>
       <HeaderContainer>
           {/* Imagem do menu para Cobrir provisoriamente o menu! */}
           <img src={Menu} onClick={()=> setShowMenu(!showMenu)}/>
           <div className="logoHeader">
               Conforto
            <img className="logoImg" src={logo}/>
                Animal
           </div>
            <img className="searchHeader" onClick={props.onClick} src={Search}/>
            
        <MenuContainer show={showMenu} onClick={()=>setShowMenu(!showMenu)}>
            <p id="close" onClick={()=> setShowMenu(!showMenu)}>X</p>
            {user && <ProfileImg src={user.photoURL}/>}

          <ListMenu flexDirection= {'column'} justifyContent={'space-around'}>
            {optionsMenu.map(res=>{                
                return( 
                <Link to={res.route}>
                    <Button 
                        value={res.text} 
                        className={'btn-menu'} 
                        onClick={()=>{ 
                            setShowMenu(!showMenu) 
                            res.text === 'sair' &&  LogOutFacebook() 
                        }}/>
                </Link>
            )})}
          </ListMenu>
        </MenuContainer>
       </HeaderContainer>
       
       </>
    )
}

export default Header
