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
    image: [],
    pet: new Pet(),
    class: "",
    url: "",
    progress: 0
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

  handleUpload = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        error => {
          // Error function ...
          console.log(error);
        },
        () => {
          // complete function ...
          firebase.storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            const pet = Object.assign({}, this.state.pet)
            pet.imgSrc = url
            this.setState({pet: pet})
          });
        }
      );
    }
  }

  insertPet(){
    const send = this.state.pet
    this.state.pet.name !=="" && firebase.database().ref('pets').child(this.state.class).push(send)
  }

  onSubmit = async (event)=>{   
    await this.insertPet()       
    this.setState({pet: new Pet()})
  }

  render() {
    const {pet, showModal, url, progress} = this.state
    return (
      <DonateContainer alignItems={'center'} flexDirection={'column'}>
        <FormPets >
        <UploadImg >
          {progress < 100 ? <label htmlFor="avatar" >+</label>: <p>ok</p>}
          <input 
            type="file"
            id="avatar"
            accept="image/png, image/jpeg"
            multiple
            style={{display: 'none'}}
            name={'imgSrc'} 
            value={url} 
            onChange={this.handleUpload}
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