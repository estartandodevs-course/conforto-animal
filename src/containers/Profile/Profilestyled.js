import styled from 'styled-components'
import '../../assets/fonts/fonts.css'
import { FlexContainer } from '../../shared/Structure'
import '../../assets/fonts/fonts.css'

export const ProfileContainer = styled.section`
@media screen and (min-width: 768px){   
   height:50vh;
   width:50VW;
   margin: 25px 0 0 50px;
}
`

export const ProfilePhoto = styled.div`
@media screen and (min-width: 768px){
   height:35vh;
   width:50VW;
   background-color: ;
   display:flex;
   align-Items:center;
  
}
`

export const ProfileName0 = styled.div`
@media screen and (min-width: 768px){
   font-family:Montserrat;
   font-size:25px;
   margin:30px;
}
`  
export const ProfileMain = styled.aside`
@media screen and (min-width: 768px){
   height:50vh;
   width:50VW;
   .componentNulo{
      display:flex;
      justify-content:space-between;
      align-Items:center;
      width:50VW;
      height: 66px;
      border:none;
   }
   .ButtonProfile{
      width: 439px;
      height: 54.43px;
      right: 1379px;
      margin-top: 100px;

   }
}
`
export const ProfileComponent = styled.div`
@media screen and (min-width: 768px){
      display:flex;
      justify-content:space-between;
      align-Items:center;
      width:50VW;
      height: 66px;
      border-top: 1px solid #01A58D;
      border-bottom: 1px solid #01A58D;
}
`
export const ButtonProfile = styled.button`
@media screen and (min-width: 768px){
   width: 439px;
   height: 54.43px;
   right: 1379px;
   top: 719px;
   background: #01A58D;
   border-radius: 10px;
}
`
