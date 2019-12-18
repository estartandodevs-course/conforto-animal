import React, { Component } from 'react'
import { AdoptionContainer, FormPet } from './AdoptionStyle'
import paw from '../../assets/images/paw.png'
import Button from '../../components/Button/Button';
// import Modal from '../../components/Modal/Modal'
// import { Lang } from '../../shared/pt'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import { GetStorageUser } from '../../firebase'
export default class Adoption extends Component {

  state = {
    showModal: true,
    class: "",
    pet: "",
    cats: false,
    dogs: false,
    user: GetStorageUser(),
  }

  async componentDidMount() {
    let pet = this.props.history.location.state;
    pet.listImgSrc = [pet.imgSrc, pet.imgSrc];
    console.log("pets -> ", pet)
    await this.setState({ pet })
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }


  // getDogs = async () => {
  //   let dogs = await Object.keys(this.state.pets.dog)
  //     .map(key => this.state.pets.dog[key])
  //   this.setState({ dogs: dogs })
  //   console.log(this.state.dogs);

  // }

  // getCats = async () => {
  //   let cats = await Object.keys(this.state.pets.cat)
  //     .map(key => this.state.pets.cat[key])
  //   this.setState({ cats: cats })
  //   // console.log(this.state.cats);

  // }

  // getAll = async () => {
  //   this.toggleModal()
  //   await firebase.database().ref('pets')
  //     .on('value', (snapshot) => {
  //       const res = snapshot.val()
  //       this.setState({ pets: res })
  //       this.getDogs()
  //       this.getCats()
  //     })

  // }


  render() {
    const { showModal, pet } = this.state
    console.log(pet)
    return (

      <AdoptionContainer>
        <SliderComponent list={pet.listImgSrc} />
        <FormPet>
            <h4>{pet.name}</h4>
          <div className="id-pets">
            <div className="form">
              <div className='label'>
                <img src={paw} alt="" />
                {pet.sexo}
              </div>

              <div className='label'>
                <img src={paw} alt="" />
                {pet.breed}
              </div>
            </div>

            <div className='label'>
              <img src={paw} alt="" />
              {pet.age}
            </div>

            <div className="form" >
              <div className='label'>
                <img src={paw} alt="" />
                {pet.castrated}
              </div>
              <div className='label'>
                <img src={paw} alt="" />
                {pet.dewormed}
              </div>
            </div>
          </div>

          <div className='description' name={'descricao'} type={'text'}>
            <h3>Descrição</h3>
            <p>{pet.description}</p>
          </div>
          <Button className="btn-bottom" value="Adotar" />
        </FormPet>
        {/* <Modal
        show={showModal}
        child={'adoption'}
        title={Lang.adoptionTitle}
        setDog={this.getAll}
        setCat={this.getCats}
      /> */}
      </AdoptionContainer >
    )
  }
}
