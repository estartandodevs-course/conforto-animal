import React, { Component } from 'react'
import { DonateContainer, UploadImg, FormPets } from './DonateStyle';
import Input from '../../components/Input/Input';
import paw from '../../assets/images/paw.png'
import Modal from '../../components/Modal/Modal'

export default class Donate extends Component {

  state={
    showModal: true
  }

  toggleModal=()=>{
    this.setState({showModal : !this.state.showModal})
  }

  componentDidMount(){

  }

  render() {
    return (
      <DonateContainer alignItems={'center'} flexDirection={'column'}>
        <header style={{height: "55px"}}>
          My Header
        </header>
        <UploadImg onClick={()=>alert('Fazer Upload das Imagens  -_-')}>
          +
        </UploadImg>

        <FormPets>
          <div className='label'>
            <img src={paw}/>          
            <Input name={'sexo'} type={'select'} options={['Masc', 'Fem']}/>
          </div>

          <div className='label'>
            <img src={paw}/>
            <Input name={'raça'} />
          </div>

          <div className='label'>
            <img src={paw}/>
            <Input name={'idade'}/> 
          </div>

          <div className='label'>
            <img src={paw}/>
            <Input name={'castrado'} type={'select'} options={['Sim', 'Nao']}/>
          </div>

          <div className='label'>
            <img src={paw}/>          
            <Input name={'Vermifugado'} type={'select'} options={['Sim', 'Nao']}/>
          </div>

          <div className='description' name={'descricao'} type={'text'}>
            <h3>Descrição</h3>         
            <textarea></textarea>
          </div>

        </FormPets>
          <button style={{height: '55px'}}>send</button>       
    </DonateContainer>
    )
  }
}