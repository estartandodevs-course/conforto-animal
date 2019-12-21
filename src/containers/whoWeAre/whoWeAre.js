import React from 'react';
import { ContainerWWA , BoxWWA , ContentWWA, Retangle, Participants } from './wwaStyle';
import ConfortoAnimalGroup from '../../assets/images/ConfortoAnimalGroup.png'

export default function whoWeAre() {
  return (
      <ContainerWWA>
              <h1 id="Title_desk">INTRODUÇÃO</h1>
          <BoxWWA>
              <ContentWWA>
                  <h1 id="Title_mob">INTRODUÇÃO</h1>
                  <p>Somos um grupo de alunos do curso <span>Estartando Devs</span> que tem como finalidade criar um site que sirva para solucionar problemas pessoais dos usuários da região.</p>
                  <img src={ConfortoAnimalGroup} alt="Conforto Animal criadores"/>
              </ContentWWA>
              <ContentWWA>
                  <div className="subTitle">
                      <Retangle/>
                      <h1>Como surgiu</h1>
                      <Retangle/>
                  </div>
                  <p>O Conforto Animal tem como ideia principal, a diminuição de animais nas ruas. Com isso, a criação do site facilitaria a adoção/doação de seus bichinhos de forma direta e também interativa. Ana Kamille, uma de nossas integrantes, teve a ideia desse trabalho anteriormente com algumas colegas de sua escola, e depois de algumas reuniões, decidimos por em prática o site.</p>
              </ContentWWA>
              <ContentWWA>
                <div className="subTitle">
                    <Retangle/>
                    <h1>Participantes</h1>
                    <Retangle/>
                </div>
              <Participants>
                    <div className="subContent">
                        <h1 >Desenvolvedores que trabalharam no projeto</h1>
                        <p>Ana Kamille, Danyel Braga, Gabriely Carris e João Pedro Ferreira</p>
                    </div>
                    <div className="subContent">
                        <h1>Designers que criaram as telas</h1>
                        <p>Ana Vitória Motta, Elizabeth Chagas, Karolina Andrade</p>
                    </div>
                    <div className="subContent">
                        <h1>Professores que ajudaram na criação</h1>
                        <p>Alan Luiz, Adrielle Bittencourt, Frederico Bezerra</p>
                    </div>
                    <div className="subContent">
                        <h1>Professor responsável</h1>
                        <p>Jonatas Pinto</p>
                    </div>
              </Participants>
              </ContentWWA>
          </BoxWWA>
      </ContainerWWA>
  );
}
