import React from 'react';
import { ModalDonate, DonateTitle, SubTitle} from './ModalStyle.js';
// import back from '../../assets/images/back.png'
import Cat from '../../assets/images/catIMG.png'
import Dog from '../../assets/images/dogIMG.png'
import {Lang} from '../../shared/pt'

const Modal = (props)=> {
  return (
  (props.child === 'donate' && 
    <ModalDonate style={{left: props.show ? 0 : "100vw"}}>
      <DonateTitle>{props.title}</DonateTitle>
      <div className='Icones'>
        <div onClick={props.setDog}>
          <img src={Dog} alt="dog" />
          <SubTitle>{Lang.doguine}</SubTitle>
        </div>

        <div onClick={props.setCat}>
          <img src={Cat} alt="cat" />
          <SubTitle>{Lang.catty}</SubTitle>
        </div>
      </div>
    </ModalDonate>)
  )
}

export default Modal
