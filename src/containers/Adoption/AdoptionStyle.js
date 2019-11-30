import styled from 'styled-components'
import '../../assets/fonts/fonts.css';
import { FlexContainer } from '../../shared/Structure';


export const AdoptionContainer = styled(FlexContainer)`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`
export const FormPet = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 100vw;
    width: 100vw;
    height: 50vh;
    background-color: #fff;
    @media screen and (min-width: 768px){
        width: 50vw;
    }
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
    }
`
