import React from 'react'
import { HeaderContainer } from './HeaderStyle'
import logo from '../../assets/images/logo.png'
import Search from '../../assets/images/search.png'
import Menu from '../../assets/images/menu 1.png'


const Header = () => {
    return (
       <HeaderContainer >
           {/* Imagem do menu para Cobrir provisoriamente o menu! */}
           <img src={Menu}/>
           <div className="logoHeader">
               Conforto
            <img className="logoImg" src={logo}/>
                Animal
           </div>
            <img className="searchHeader" onClick="" src={Search}/>
       </HeaderContainer>
    )
}

export default Header
