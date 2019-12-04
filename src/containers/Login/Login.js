import React, { Component } from 'react';
import {LoginContainer} from './LoginStyle';
import logo2 from '../../assets/images/logo2.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import facebook from '../../assets/images/facebook.png'
import google from '../../assets/images/google.png'
import '../../assets/fonts/fonts.css'
import { LoginFacebook, GetStorageUser, LoginGoogle } from '../../firebase'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {

  state={
    user: GetStorageUser()
  }

  componentDidMount(){     
    console.log(this.state.user)
  }

  render() {
    const {user} = this.state

    return ( user ? <Redirect to={{pathname: '/home'}}/> :

    <LoginContainer flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}>
        <div>
            <img src={logo2} alt=""/>
        </div>
        <div className="socialContainer">
          <div className="iconSocial">
              <img src={facebook} onClick={()=>LoginFacebook()}/>
              <h2>ou</h2>
              <img src={google}/>
          </div>
          <h1>Faça login com suas redes sociais.</h1>
        </div>
    </LoginContainer> 
    
    )
  }
}
