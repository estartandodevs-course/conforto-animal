import styled from 'styled-components'
import '../../assets/fonts/fonts.css'
import { FlexContainer } from '../../shared/Structure'
import '../../assets/fonts/fonts.css'
import fundo from '../../assets/images/fundo.png'

export const ProfileContainer = styled.section`
@media screen and (max-width: 600px){
   background-Image: url(${fundo});
   background-repeat:;
   background-size: 100%;
   min-height:100vh;
   max-width:100vw;
   display:flex;
   flex-direction:column;     
   align-items:center;
}
   @media screen and (min-width: 768px){   
      height:auto;
   width:auto;
   display:flex;  
   background-Image: none;
   flex-direction:none;  
}
`

export const ProfilePhoto = styled.div`
@media screen and (max-width: 600px){
   height:200px;
   width:100%;
   background-color:;   
   display:flex;
   flex-direction:column;
   jutify-content:cneter;
   align-items:center;
   .ProfileName0{
      font-family:Montserrat;
      font-size:25px;
      margin:10px
      color:white;
   }
}
   @media screen and (min-width: 768px){
   height:35vh;
   width:50VW;
   display:flex;
   align-Items:center;
   margin:0px 0px 0px 50px;   
   .ProfileImg{
      border: 3px solid #01A58D;
   }
}
`

export const ProfileName0 = styled.div`
@media screen and (min-width: 768px){
   font-family:Montserrat;
   font-size:25px;
   margin:30px;
   .ProfileName0{
   font-family:Montserrat;
   font-size:25px;
   margin:30px;   
   }
}
`  
export const ProfileMain = styled.aside`
@media screen and (max-width: 600px){
   .ButtonProfile{
      height:60px;
      width:280px;
      margin:15px;
      background-color: white;
      color:black;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:20px;
      font-family: Montserrat, sans-serif;
      font-size:15px;
   }
   
}
@media screen and (min-width: 768px){
   height:80vh;
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
      margin: 100px 20px 20px 50px;

   }
}
`
export const ProfileComponent = styled.div`
@media screen and (max-width: 600px){
   height:60px;
   width:280px;
   margin:15px;
   background-color: white;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:20px;
}
@media screen and (min-width: 768px){
      display:flex;
      justify-content:space-between;
      align-Items:center;
      width:50VW;
      height: 66px;
      border-top: 1px solid #01A58D;
      border-bottom: 1px solid #01A58D;
      margin:0px 50px 0px 50px;
   }
         .ProfileName0{
            font-family:Montserrat;
            font-size:15px;
            margin:0px;   
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
   margin:50px;
   display:flex;
   jutify-content:center;
}
`
export const ProfileDonate = styled.section`
@media screen and (max-width: 600px){
   height:60px;
   width:280px;
   margin:15px;
   background-color: white;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:20px;
}
@media screen and (min-width: 768px){
   height:80vh;
   width:50VW;
   display:flex;
   justify-content:center;
}
`
export const Section = styled.section`
@media screen and (max-width: 600px){
   height:60px;
   width:280px;
   margin:15px;
   background-color: white;
   display:flex;
   align-items:center;
   justify-content:center;
   border-radius:20px;
   font-family: Montserrat, sans-serif;

}
@media screen and (min-width: 768px){
   width: 500px;
   height: 81px;
   display:flex;
   justify-content:center;
   align-items:center;
   font-family: Montserrat, sans-serif;
   border: none;
   border-radius: 10px;
   margin: 40px 10px 10px 100px;
   background-color: #01A58D;
   color: #fff;
}
`

