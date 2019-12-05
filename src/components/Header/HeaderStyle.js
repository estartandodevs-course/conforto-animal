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
@media screen and (min-width: 768px){
      display:none;
   }
   position: fixed;
   left: ${props=> props.show ? 0 : '-100vw'};
   top: 0;
   height: 100%;
   width: 100%;
   z-index: 4;
   background-color: #01A58D;
   transition: .4s;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 15px 0 0 0;
   #close{
      position: absolute;
      left:7px;
      right:0;
      top: 0;
      margin: 20px;
      font-family: 'Roboto';  
   }
   @media screen and (min-width: 768px){
      display: block;
   }
`

export const ProfileImg = styled.img`
   border-radius: 50%;
   border: 5px solid black;
   width: 150px;
   height: 150px;
   
`
export const ProfileName = styled.p`
   display:flex;
   justify-content:center;
   color:black;
   font-size:25px;
   font-family:Montserrat; 
   border-bottom:5px solid black;
   width:100%;
 
`
export const ListMenu = styled(FlexContainer)`
   height: 30vh;
   margin-top:115px;
`

export const MenuDesktop = styled.div`
   display: flex;
   justify-content: center;
   font-size: 16px;
   font-style: italic;
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
      width: 120px;
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