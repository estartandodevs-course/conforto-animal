import React, {useState} from 'react'
import { HeaderContainer, MenuContainer} from './HeaderStyle'
import logo from '../../assets/images/logo.png'
import Search from '../../assets/images/search.png'
import Menu from '../../assets/images/menu 1.png'


const Header = (props) => {
    return (
        <>
       <HeaderContainer >
           {/* Imagem do menu para Cobrir provisoriamente o menu! */}
           <img src={Menu} onClick={()=> setShowMenu(!showMenu)}/>
           <div className="logoHeader">
               Conforto
            <img className="logoImg" src={logo}/>
                Animal
           </div>
            <img className="searchHeader" onClick={props.onClick} src={Search}/>
       </HeaderContainer>
       
        <MenuContainer show={showMenu}>
          <h1>Hello</h1>
          <button onClick={()=> setShowMenu(!showMenu)}>Close</button>
        </MenuContainer>
       </>
    )
}

export default Header
