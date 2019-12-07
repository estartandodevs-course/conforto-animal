import React from 'react';
import { ModalDonate, ModalAdoption, DonateTitle, SubTitle, Options} from './ModalStyle.js';
import Cat from '../../assets/images/catIMG.png'
import Dog from '../../assets/images/dogIMG.png'
import {Lang} from '../../shared/pt'
import { Link } from 'react-router-dom';


const Modal = (props)=> {

  const handleReturn = () => {

    switch(props.child) {

      case "donate":
        return (
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
          </ModalDonate>
        )

        case "adoption": 
        return (
          <ModalAdoption style={{left: props.show ? 0 : "100vw"}} >
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
            <div className="Option">
              <p className="text-option">OU</p>
              <Link to="/home">
                <Options>{Lang.optionPrimary}</Options>
              </Link>
              <Link to="/donate">
                <Options>{Lang.optionSecundary}</Options>
              </Link>
            </div>
          </ModalAdoption> 
        )
    }
  }

  return (
    <>
      {handleReturn()}
    </>
  )
}

export default Modal
