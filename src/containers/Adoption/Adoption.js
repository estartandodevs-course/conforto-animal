import React, { Component } from 'react'
import { AdoptionContainer, FormPet } from './AdoptionStyle'
import Input from '../../components/Input/Input';
import paw from '../../assets/images/paw.png'
import Button from '../../components/Button/Button';
import  SliderComponent  from '../../components/SliderComponent/SliderComponent'
import SliderContainer from '../../components/SliderComponent/sliderStyle.js';

export default class Adoption extends Component {

  render() {

    return (

      <AdoptionContainer>
          <SliderComponent />
        <FormPet>
          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'sexo'} type={'select'} options={['Masc', 'Fem']} />
          </div>

          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'raça'} />
          </div>

          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'idade'} />
          </div>

          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'castrado'} type={'select'} options={['Sim', 'Nao']} />
          </div>

          <div className='label'>
            <img src={paw} alt="" />
            <Input name={'Vermifugado'} type={'select'} options={['Sim', 'Nao']} />
          </div>

          <div className='description' name={'descricao'} type={'text'}>
            <h3>Descrição</h3>
            <p>Cachorrinho filhote, muito dócil, adora crianças e já come ração. Estou doando por motivo de mudança</p>
          </div>
        </FormPet>
        <Button className="btn-bottom" value="Adotar"/>
      </AdoptionContainer>
    )
  }
}
