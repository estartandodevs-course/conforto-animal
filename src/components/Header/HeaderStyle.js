import styled from 'styled-components'
import '../../assets/fonts/fonts.css'
import { FlexContainer } from '../../shared/Structure'
import '../../assets/fonts/fonts.css'

export const HeaderContainer = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-around;
   background-color: #01A58D;
   color: #fff;
   font-family:  Waiting for the Sunrise;
   width: 100%;
   height: 55px;
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
      justify-content: space-around;
      font-size: 26px;
      height: 75px;
      .logoImg{
         width: 85px;
         height: 85px;
      }
   }

`

export const MenuContainer = styled.div`
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
`

export const ProfileImg = styled.img`
   border-radius: 50%;
   border: 5px solid black;
   width: 150px;
   height: 150px;
   
`
export const Profilename = styled.p`
   color:black;
 
`
export const ListMenu = styled(FlexContainer)`
   height: 30vh;
   margin-top:115px;
`