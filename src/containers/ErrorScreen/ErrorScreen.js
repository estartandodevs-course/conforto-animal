import React from 'react';
import {ErrorContainer} from './ErrorScreenStyle';
import dogConfused from '../../assets/images/dogConfused.gif';

export default function ErrorScreen() {
    const home = () =>{
        window.location.href = '/home'
    }
  return (
    <ErrorContainer>
    <img alt="Dog-confused" src={dogConfused}/>
    <h1>PAGINA NÃO ENCONTRADA</h1>
    <p onClick={home}>voltar a pagina inicial</p>
    </ErrorContainer>
  );
}
