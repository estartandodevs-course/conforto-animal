import React, { useState, useEffect } from "react";
import { DonateContainer, UploadImg, FormPets, ChoosePet, FormDesk } from "./DonateStyle";
import Input from "../../components/Input/Input";
import paw from "../../assets/images/paw.png";
import Button from "../../components/Button/Button";
import Pet from "../../models/Pet";
import { firebase } from "../../firebase";
import Modal from "../../components/Modal/Modal";
import { Lang } from "../../shared/pt";
import Select from "../../components/select/Select";
import { PetService } from "../../services/pets";
import Steps from "../../components/Steps/Steps";
import {useMedia} from '../../hooks/useMedia'

const Donate=()=> {
  const steps = [{title:''}, {title: ''}, {title:''}]
  const [showModal, setShowModal]=useState(true);
  const [image, setImage]=useState([]);
  const [pet, setPet]=useState(new Pet());
  const [Class, setClass]=useState("");
  const [url, setUrl]=useState("");
  const [progress, setProgress]=useState(0);
  const [activeStep, setactiveStep]=useState(1)

  const { isSmall, isMedium, isLarge } = useMedia()
  const petService = new PetService();

  useEffect(() => {
    getLocation();
  },[]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const isCat = async () => {
    await setClass("cat" );
    toggleModal();
  };

  const isDog = async () => {
    await setClass("dog");
    toggleModal();
  };

  const handleOnClickStepper = (step) => {
    setactiveStep(step)
  }

  const handleOnClickNext = () => {
      let nextStep = activeStep + 1;
     setactiveStep(nextStep)
  }

  const handleOnClickBack = () => {
      let prevStep = activeStep - 1;
      setactiveStep(prevStep)
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const pet_ = Object.assign({}, pet);
        pet_.location.lat = position.coords.latitude;
        pet_.location.lng = position.coords.longitude;
        setPet(pet_);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const onChange = event => {
    const pet_ = Object.assign({}, pet);
    const input = event.target.name;
    pet_[input] = event.target.value;
    setPet(pet_);
  };

  const handleUpload = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      const uploadTask = firebase
        .storage()
        .ref(`images/${image.name}`)
        .put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          // Error function ...
          console.log(error);
        },
        () => {
          // complete function ...
          firebase
            .storage()
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              const pet_ = Object.assign({}, pet);
              pet_.imgSrc = url;
              setPet( pet_ );
            });
        }
      );
    }
  };

  const onSubmit = async event => {
    const response = await petService.insertPet(
      pet,
      Class
    );
    console.log("REF PETS :: ", response);
     setPet(new Pet());
  };

   return isSmall ? (
    <DonateContainer alignItems={"center"} flexDirection={"column"}>
      <FormPets>
        <UploadImg>
          {progress < 100 ? <label htmlFor="avatar">+</label> : <p>ok</p>}
          <input
            type="file"
            id="avatar"
            accept="image/png, image/jpeg"
            multiple
            style={{ display: "none" }}
            name={"imgSrc"}
            value={url}
            onChange={handleUpload}
          />
        </UploadImg>

        <div className="label">
          <img src={paw} alt="" />
          <Input
            name={"name"}
            placeholder="Nome"
            value={pet.name}
            action={onChange}
            type={"text"}
          />
        </div>

        <div className="label">
          <img src={paw} alt="" />
          <Select
            name={"sexo"}
            placeholder="Sexo"
            value={pet.sexo}
            action={onChange}
            type={"select"}
            options={[
              { name: "Feminino", value: "feminino" },
              { name: "Masculino", value: "masculino" }
            ]}
          />
        </div>

        <div className="label">
          <img src={paw} alt="" />
          <Input
            name={"breed"}
            placeholder="Raça"
            value={pet.breed}
            action={onChange}
            type={"text"}
          />
        </div>

        <div className="label">
          <img src={paw} alt="" />
          <Input
            name={"age"}
            placeholder="Idade"
            value={pet.age}
            action={onChange}
            type={"number"}
          />
        </div>

        <div className="label">
          <img src={paw} alt="" />
          <Select
            name={"castrated"}
            value={pet.castrated}
            placeholder="Castrado"
            action={onChange}
            type={"select"}
            options={[
              { name: "Sim", value: "Sim" },
              { name: "Não", value: "Não" }
            ]}
          />
        </div>

        <div className="label">
          <img src={paw} alt="" />
          <Select
            name={"dewormed"}
            placeholder="Vermifugado"
            value={pet.dewormed}
            action={onChange}
            type={"select"}
            options={[
              { name: "Sim", value: "Sim" },
              { name: "Não", value: "Não" }
            ]}
          />
        </div>

        <div className="description">
          <p>{Lang.description}</p>
          <Input
            placeholder="Descrição"
            name={"description"}
            value={pet.description}
            action={onChange}
            type={"textarea"}
          ></Input>
        </div>

        <Button
          action={onSubmit}
          className="btn-bottom"
          value={"send"}
        />
      </FormPets>
      <Modal
        show={showModal}
        child={"donate"}
        title={Lang.donateTitle}
        setDog={isDog}
        setCat={isCat}
      />
    </DonateContainer>
    ) : (
    <FormPets>
      <div className='steps-content'>
              
        {activeStep ===1 ? '' : 
        <div className='btn-steps'>
          <Button value="Anterior" action={handleOnClickBack} />
          </div>}
          <div>
            <h1 style={{textAlign:'center', fontWeight:500}}>Etapas de doação</h1>
            <Steps
              steps={steps}
              onSelect={handleOnClickStepper}
              activeStep={activeStep}
              Steps1={<ChoosePet>
                <Button value="gato" action={isCat && handleOnClickNext}/>
                <Button value="cachorro" action={isDog && handleOnClickNext }/>
                </ChoosePet>}
              Steps2={
                <FormDesk>
                  <div className="label">
                    <img src={paw} alt="" />
                    <Input
                      name={"name"}
                      placeholder="Nome"
                      value={pet.name}
                      action={onChange}
                      type={"text"}
                    />
                  </div>
                  <div className="label">
                    <img src={paw} alt="" />
                    <Select
                      name={"sexo"}
                      placeholder="Sexo"
                      value={pet.sexo}
                      action={onChange}
                      type={"select"}
                      options={[
                        { name: "Feminino", value: "feminino" },
                        { name: "Masculino", value: "masculino" }
                      ]}
                    />
                  </div>
                  <div className="label">
                    <img src={paw} alt="" />
                    <Input
                      name={"breed"}
                      placeholder="Raça"
                      value={pet.breed}
                      action={onChange}
                      type={"text"}
                    />
                  </div>
                  <div className="label">
                    <img src={paw} alt="" />
                    <Input
                      name={"age"}
                      placeholder="Idade"
                      value={pet.age}
                      action={onChange}
                      type={"number"}
                    />
                  </div>
                  <div className="label">
                    <img src={paw} alt="" />
                    <Select
                      name={"castrated"}
                      value={pet.castrated}
                      placeholder="Castrado"
                      action={onChange}
                      type={"select"}
                      options={[
                        { name: "Sim", value: "Sim" },
                        { name: "Não", value: "Não" }
                      ]}
                    />
                  </div>
                  <div className="label">
                    <img src={paw} alt="" />
                    <Select
                      name={"dewormed"}
                      placeholder="Vermifugado"
                      value={pet.dewormed}
                      action={onChange}
                      type={"select"}
                      options={[
                        { name: "Sim", value: "Sim" },
                        { name: "Não", value: "Não" }
                      ]}
                    />
                  </div>
                  <div className="description">
                    <p>{Lang.description}</p>
                    <Input
                      placeholder="Descrição"
                      name={"description"}
                      value={pet.description}
                      action={onChange}
                      type={"textarea"}
                    ></Input>
                  </div>
                </FormDesk>} 
              Steps3={
                <div style={{width:'50vw'}}>
              <UploadImg>
                {progress < 100 ? <label htmlFor="avatar">+</label> : <p>ok</p>}
                <input
                  type="file"
                  id="avatar"
                  accept="image/png, image/jpeg"
                  multiple
                  style={{ display: "none" }}
                  name={"imgSrc"}
                  value={url}
                  onChange={handleUpload}
                />
              </UploadImg>
              <Button
                action={onSubmit}
                className="btn-bottom"
                value={"send"}
              />
            </div>}
            />
          </div>
          {activeStep === 1 ? '' :
            <div className='btn-steps'>
              <Button
                value={activeStep === steps.length ? "Finalizar" : 'Próximo'}
                action={activeStep === steps.length ? null : handleOnClickNext}
              />
            </div>
          }
      </div>
    </FormPets>
  )
  
}
export default Donate