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
        height:40vh;
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
        justify-content:flex-start;
        align-items:center;
        background-color:#EBEBEB;
        min-height:100vh;
    }
    .steps-content{
        margin-top:10px; 
        display:flex;
        justify-content:center;
        align-items:flex-start;
        .btn-steps{
            height:80vh;
            width:20vw;
            display:flex;
            align-items:center;
            justify-content:center;
        }
    }
`
export const ChoosePet = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    width:40vw;
    heigth:200px;
    Button{
        margin-top:5px;
    }
`
export const FormDesk = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    .label{
        img{
            width:24px;
        }
        Input{
            width:262px;
        }
    }
`