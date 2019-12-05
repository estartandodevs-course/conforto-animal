import React from 'react';
import {ErrorContainer} from './ErrorScreenStyle';
import dogConfused from '../../assets/images/dogConfused.gif';
import {Link} from "react-router-dom";

export default function ErrorScreen() {
  return (
    <ErrorContainer>
    <img alt="Dog-confused" src={dogConfused}/>
    <h1>PAGINA NÃO ENCONTRADA</h1>
    <Link to="/">voltar a pagina inicial</Link>
    </ErrorContainer>
  );
}
