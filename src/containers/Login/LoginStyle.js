import styled from 'styled-components'
import{ FlexContainer } from '../../shared/Structure'
import '../../assets/fonts/fonts.css'

export const LoginContainer = styled(FlexContainer)`
    background-color: #01A58D;
    min-height:100vh;
    h1{
        font-family: 'Waiting for the Sunrise';
        font-size: 30px;
        margin-left: 12px;
    }
    h2{
        color:#FFF;
        font-weight:300;
        padding:10px;
    }
    .FormContainer{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:150px;
    }
    Input{
        margin-bottom:10px;
    }
    button {
        font-family: 'Montserrat';
        border:none
        width:200px;
        height:40px;
        background: linear-gradient(90deg, #E2E5C5 50%, #E0A359 50%);
    }
    .iconSocial img{
        margin:20px
    }
`