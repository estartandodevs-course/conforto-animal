import React from 'react';
import { ModalContainer } from './ModalStyle.js';
import next from '../../assets/images/next.png'
import gato from '../../assets/images/catIMG.png'
import cachorro from '../../assets/images/dogIMG.png'

export default function Modal(props) {
  return (
    <ModalContainer style={{left: props.show ? 0 : "100vw"}}>
      <img src={back} id='close' alt="botão voltar" onClick={props.close}/>
      <div id="Title">
        <h1>{props.title}</h1>
      </div>
      <div className='Icones'>
        <div>
          <img src={cachorro} alt="cachorro" />
          <h1>Doguíneo</h1>
        </div>
        <div>
          <img src={gato} alt="gato" />
          <h1>Gatíneo</h1>
        </div>
      </div>
      <h2>{props.description1}</h2>
      <h3>{props.description2}</h3>
      <h3>{props.description3}</h3>
    </ModalContainer>
  );
}
