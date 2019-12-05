import React, { Component } from 'react'
import { DonateContainer, UploadImg, FormPets } from './DonateStyle';
import Input from '../../components/Input/Input';
import paw from '../../assets/images/paw.png'
import Button from '../../components/Button/Button'
import Pet from '../../models/Pet'
import {firebase } from '../../firebase'
import Modal from '../../components/Modal/Modal'
import {Lang} from '../../shared/pt'

export default class Donate extends Component {
  
  state={
    showModal: true,
    images: [],
    pet: new Pet(),
    class: ""
  }
  
  componentDidMount(){
    this.getLocation()      
  }

  toggleModal=()=>{
    this.setState({showModal : !this.state.showModal})
  }
  
  isCat = async ()=>{   
    await this.setState({class: "cat"})
    this.toggleModal()
  }

  isDog = async ()=>{
    await this.setState({class: "dog"})
    this.toggleModal()
  }

  getLocation = ()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position=>{
        const pet = Object.assign({},this.state.pet)
        pet.location.lat = position.coords.latitude
        pet.location.lng = position.coords.longitude
        this.setState({pet:pet})
      })
    } else { 
      console.log("Geolocation is not supported by this browser.")
    }
  }  

  onChange = (event)=>{
    const pet = Object.assign({}, this.state.pet)
    const input = event.target.name
    pet[input] = event.target.value
    this.setState({pet: pet})
  }

  onSubmit = async (event)=>{
    console.log(this.state.pet);
    await this.insertPet()       
    this.setState({pet: new Pet()})
  }

  insertPet(){
    const send = this.state.pet
    this.state.pet.name !=="" && firebase.database().ref('pets').child(this.state.class).push(send)
  }

  render() {
    const {pet, showModal} = this.state
    return (
      <DonateContainer alignItems={'center'} flexDirection={'column'}>
        <FormPets >
        <UploadImg >
          <label htmlFor="avatar" >+</label>
          <input 
            type="file"
            id="avatar"
            accept="image/png, image/jpeg"
            multiple
            style={{display: 'none'}}
            name={'imgSrc'} 
            value={pet.imgSrc} 
            onChange={this.onChange}
          />
        </UploadImg>

        <div className='label'>
          <img src={paw} alt=""/>          
          <Input name={'name'} value={pet.name} action={this.onChange} type={'text'} />
        </div>

        <div className='label'>
          <img src={paw} alt=""/>          
          <Input name={'sexo'} value={pet.sexo} action={this.onChange} type={'select'} options={['Masc', 'Fem']}/>
        </div>

        <div className='label'>
          <img src={paw} alt=""/>
          <Input name={'breed'} value={pet.breed} action={this.onChange} type={'text'}/>
        </div>

        <div className='label'>
          <img src={paw} alt=""/>
          <Input name={'age'} value={pet.age} action={this.onChange} type={'text'}/> 
        </div>

        <div className='label'>
          <img src={paw} alt=""/>
          <Input name={'castrated'} value={pet.castrated} action={this.onChange} type={'select'} options={['Sim', 'Nao']}/>
        </div>

        <div className='label'>
          <img src={paw} alt=""/>          
          <Input name={'dewormed'} value={pet.dewormed} action={this.onChange} type={'select'} options={['Sim', 'Nao']}/>
        </div>

        <div className='description'>
          <p>{Lang.description}</p>         
          <Input name={'description'} value={pet.description} action={this.onChange} type={'textarea'}></Input>
        </div>

        <Button 
        onClick={()=>this.onSubmit()} 
        className='btn-bottom' 
        value={'send'}
        />
      </FormPets>

      <Modal 
        show={showModal} 
        child={'donate'} 
        title={Lang.donateTitle} 
        setDog={this.isDog}
        setCat={this.isCat}
      />
    </DonateContainer>
    )
  }
}