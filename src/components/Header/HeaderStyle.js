import styled from 'styled-components'
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
   
   .logoHeader{
      display: flex;
      align-items: center;
   }
   .logoImg{
      width: 55px;
      height: 55px;
   }
   .searchHeader{
      cursor: pointer;
   }

   @media screen and (min-width: 768px){
      justify-content: space-around;
      font-size: 26px;
      height: 75px;

      .logoHeader{
         display: flex;
         align-items: center;
      }
      .logoImg{
         width: 85px;
         height: 85px;
      }
   }

`

export const MenuContainer = styled.div`
   position: fixed;
   left: ${props=> props.show ? 0 : '-100vw'};
   height: 100vh;
   width: 50vw;
   z-index: 4;
   background-color: #01A58D;
   transition: .5s
`