import styled from 'styled-components'
import '../../assets/fonts/fonts.css'
import { FlexContainer } from '../../shared/Structure'
import '../../assets/fonts/fonts.css'

export const HeaderContainer = styled.header`
   position: sticky;
   top:0;
   display: flex;
   align-items: center;
   justify-content: space-around;
   background-color: #01A58D;
   color: #fff;
   font-family:  Waiting for the Sunrise;
   width: 100%;
   height: 55px;
   z-index: 5;
   .menuHeader{
      position: absolute;
      left: 7px;
   }
   .logoImg{
      width: 55px;
      height: 55px;
   }
   .chatHeader{
      position: absolute;
      right: 7px;
   }


   @media screen and (min-width: 768px){
      justify-content: space-between;
      font-size: 26px;
      height: 75px;
      .menuHeader{
         display: none;
      }
      .logoImg{
         width: 85px;
         height: 85px;
      }
      .chatHeader{
         display: none;
      }
   }

`

export const MenuContainer = styled.div`
   position: fixed;
   left: ${props=> props.show ? 0 : '-100vw'};
   top: 0;
   height: 100vh;
   width: 50vw;
   z-index: 4;
   background-color: #01A58D;
   transition: .5s;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 15px 0 0 0;
   #close{
      position: absolute;
      right:0;
      top: 0;
      margin: 8px;
      font-family: 'Roboto';
      color: black;
   }
   @media screen and (min-width: 768px){
      display: block;
   }
`

export const ProfileImg = styled.img`
   border-radius: 50%;
   width: 120px;
   height: 120px;
`

export const ListMenu = styled(FlexContainer)`
   display: flex;
   height: 30%;
`

export const MenuDesktop = styled.div`
   display: flex;
   justify-content: center;
   font-size: 16px;
   font-family: Montserrat;
   color: #fff;
   display: none;
   text-align: center;
   ul{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 55px;
   }
   li{
      display: flex;
      justify-content: center;
      width: 100px;
      border-right: solid 1px #fff;
      list-style-type: none;
   }
   a{
      text-decoration: none;
      color: #fff;
   }
   li:hover{
      display: flex;
      align-items: center;
      background-color: #006455;
      height: 75px;
      transition: 1s;
      cursor: pointer;
   }
   .last-border{
      border-right-color: transparent;
   }
   @media screen and (min-width: 768px){
      display: flex;
      
   }
`