import styled from 'styled-components'
import { FlexContainer } from '../../shared/Structure'

export const DonateContainer = styled(FlexContainer)`
    width: 100vw;
    height: 100vh;
    background-color: #01A58D;
    @media screen and (min-width: 768px){
    
    }
    .label{
        display: flex;
        justify-content: space-around;
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
export const UploadImg = styled.section`
    width: 100vw;
    height: calc(50vh - 110px);
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    @media screen and (min-width: 768px){
        width: 50vw;
    }
`
export const FormPets = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100vw;
    height: 50vh;
    background-color: #fff;
    @media screen and (min-width: 768px){
        width: 50vw;
    }
`