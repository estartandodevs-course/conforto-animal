import styled from 'styled-components'
import '../../assets/fonts/fonts.css';
import { FlexContainer } from '../../shared/Structure'

export const DonateContainer = styled(FlexContainer)`
    max-width: 100vw;
    height: calc(100vh - 55px);
    background-color: #01A58D;
    .label{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img{
            margin: 0 11px 0 29px;
            height: 20px;
        }
    }
    .description{
        display: flex; 
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        align-self: center;
        p{
            font-family: Montserrat, sans-serif;
            font-size: 18px;
            color: #333333;
        }
    }
`
export const UploadImg = styled.section`
    width: 100%;
    height: 160px;
    background-color: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    @media screen and (min-width: 768px){
        /* width: 50%; */
    }
`
export const FormPets = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: #fff;
    @media screen and (min-width: 768px){
        width: 50vw;
    }
`