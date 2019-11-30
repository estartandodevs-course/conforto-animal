import styled from 'styled-components'
import '../../assets/fonts/fonts.css';
import { FlexContainer } from '../../shared/Structure';


export const AdoptionContainer = styled(FlexContainer)`
    display: flex;
    flex-direction: column;
    height: 100vh;
`
export const FormPet = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: Montserrat, sans-serif;
    background-color: #fff;
    height: 50vh;
    margin-left: 20px;

    .label{
        display: flex;
        align-items: center;
        @media screen and (min-width: 768px){
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }
    .description{
        display: flex; 
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        font-size: 14px;
        font-style: normal;
        font-weight: normal;
        h3{
            font-size: 18px;
            color: #333333;
            font-style: normal;
            font-weight: normal;
            margin-bottom: 5px;
        }
    }
`
