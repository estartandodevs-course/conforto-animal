import React, {useState} from 'react'
import { HeaderContainer, MenuContainer, ProfileImg, ListMenu, MenuDesktop, ProfileName} from './HeaderStyle'
import logo from '../../assets/images/logo.png'
import Search from '../../assets/images/search.png'
import Menu from '../../assets/images/menu 1.png'
import Button from '../Button/Button'
import Home from '../../containers/Home/Home'
import { Link } from 'react-router-dom';
import { LogOutFacebook, GetStorageUser, LogOutGoogle } from '../../firebase'

const Header = (props) => {
    const [showMenu, setShowMenu] = useState(false)
    const [user] = useState(GetStorageUser())
    const [optionsMenu] = useState([
        {
            text: 'Adote',
            route: '/adoption'
        },
        {
            text: 'Doe',
            route: '/donate'
        },
        {
            text:'Fazer login',
            route: '/login'
        },
        {
            text:'Quem Somos' ,
            route: '*'
        },
        {
            text:'Minhas Doaçoes',
            route: '*'
        },
        {
            text:'Sair',
            route: '/home'
        },
    ])
    const [optionsHeader] = useState([
        {
            text:'Home',
            route: '/home'
        },
        {
            text: 'Adote',
            route: '/adoption'
        },
        {
            text: 'Doe',
            route: '/donate'
        },
        {
            text:'Quem Somos' ,
            route: '*'
        },
        {
            text:'Meu Perfil',
            route: '*'
        },
    ])

    return (
        <>
       <HeaderContainer>
           <img className="menuHeader" src={Menu} alt="" onClick={()=> setShowMenu(!showMenu)}/>
            <img className="logoImg" alt="" src={logo}  onClick={()=> setShowMenu(!Home)}/>
            <Link to='/chat' className='chatHeader'><img alt="Chat" src={Search}/></Link>
            
        <MenuContainer show={showMenu} onClick={()=>setShowMenu(!showMenu)}>
            <p id="close" onClick={()=> setShowMenu(!showMenu)}>X</p>
            {user && <ProfileImg src={user.photoURL}/>}
            {user && <ProfileName>{user.displayName}</ProfileName>}

          <ListMenu flexDirection= {'column'} justifyContent={'space-around'}>
            {optionsMenu.map((res, index)=>{                
                return( 
                <Link to={res.route} key={index}>
                    <Button 
                        value={res.text} 
                        className={'btn-menu'} 
                        onClick={()=>{ 
                            setShowMenu(!showMenu) 
                            res.text === 'sair' &&  (LogOutFacebook() && LogOutGoogle()) 
                        }}/>
                </Link>
            )})}
          </ListMenu>
        </MenuContainer>
        <MenuDesktop>
            <ul>
                {optionsHeader.map((options, index) =>{
                    return <Link to={options.route} key={index}>
                        <li onClick={()=>{
                            options.text === 'sair' &&  (LogOutFacebook() && LogOutGoogle()) 
                        }}>{options.text}</li>
                    </Link>
                })}
            </ul>           
        </MenuDesktop>
       </HeaderContainer>
       
       </>
    )
}

export default Header
