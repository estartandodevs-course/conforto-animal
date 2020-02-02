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
            text: user ? 'Meu Perfil' : 'Fazer Login',
            route: user ? '/profile' : '/login'
        },
        {
            text: user ? 'Conversas' : 'Quem Somos' ,
            route: user ? '/' : '/weWhoAre'
        },
        {
            text:'Minhas Doaçoes',
            route: '*'
        },
        {
            text:user ? 'sair' : '',
            route: '/home'
        },

        
    ])
    const [optionsHeader] = useState([
        {
            text:'Home',
            route: '/home'
        },
        {
            text: 'Doe',
            route: '/donate'
        },
        {
            text: user ? 'Conversas' : 'Quem Somos' ,
            route: user ? '/' : '/weWhoAre'
        },
        {
            text: user ? 'Meu Perfil' : 'Fazer Login',
            route: user ? '/profile' : '/login'
        },
        {
            text:user ? 'sair' : '',
            route: '/home'
        },
    ])

    return (
        <>
       <HeaderContainer>
            <img className="menuHeader" src={Menu} alt="" onClick={()=> setShowMenu(!showMenu)}/>
            <Link to='/' ><img className="logoImg" alt="" src={logo}  onClick={()=> setShowMenu(!Home)}/></Link>
               <div className="textLogo">
                    <p className="textConforto">Conforto</p>
                    <p className="textAnimal">Animal</p>
               </div>
            <Link to='/chat' className='chatHeader'><img alt="Chat" src={Search}/></Link>
            
        <MenuContainer show={showMenu}>
            <p id="close" onClick={()=> setShowMenu(!showMenu)}>X</p>
             <ProfileImg src={user ? user.photoURL : logo}/>
            {user && <ProfileName>{user.displayName}</ProfileName>}

          <ListMenu flexDirection= {'column'} justifyContent={'space-around'}>
            {optionsMenu.map((res, index)=>{                
                return( 
                 res.text !== '' && <Link to={res.route} key={index}>
                    <Button 
                        value={res.text} 
                        className={'btn-menu'} 
                        action={()=>{ 
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
                    return options.text !== '' && <Link to={options.route} key={index}>
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
