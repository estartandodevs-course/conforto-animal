import React, { Component } from 'react'
import { AdoptionContainer, FormPet } from './AdoptionStyle'
import Input from '../../components/Input/Input';
import paw from '../../assets/images/paw.png'
import { cover } from 'polished';
// import Button from '../../components/Button/Button'
// import Modal from '../../components/Modal/Modal'


export default class Adoption extends Component {

  render() {

    return (

      <AdoptionContainer>
        
        <FormPet>
          <div className='label'>
            <img src={paw} />
            <Input name={'sexo'} type={'select'} options={['Masc', 'Fem']} />
          </div>

          <div className='label'>
            <img src={paw} />
            <Input name={'raça'} />
          </div>

          <div className='label'>
            <img src={paw} />
            <Input name={'idade'} />
          </div>

          <div className='label'>
            <img src={paw} />
            <Input name={'castrado'} type={'select'} options={['Sim', 'Nao']} />
          </div>

          <div className='label'>
            <img src={paw} />
            <Input name={'Vermifugado'} type={'select'} options={['Sim', 'Nao']} />
          </div>

          <div className='description' name={'descricao'} type={'text'}>
            <h3>Descrição</h3>
            <p>Cachorrinho filhote, muito dócil, adora crianças e já come ração. Estou doando por motivo de mudança</p>
          </div>

        </FormPet>
      </AdoptionContainer>
    )
  }
}
