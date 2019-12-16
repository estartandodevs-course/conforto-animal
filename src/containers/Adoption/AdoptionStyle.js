import styled from 'styled-components'
import '../../assets/fonts/fonts.css';
import { FlexContainer } from '../../shared/Structure';


export const AdoptionContainer = styled(FlexContainer)`
    display: flex;
    flex-direction: column;
    height: 90vh;
    background-color: #EBEBEB;
    font-family: Montserrat, sans-serif;
    @media screen and  (min-width: 768px) {
        justify-content: center;
        align-items: center;
        .btn-bottom{
            width: 520px;
            font-size: 20px;
            height: 30px;
            border-radius: 10px;
        }
    }
`
export const FormPet = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #EBEBEB;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    h4{
        margin: 10px 0 10px 20px;
        color: #333333;
        font-family: Montserrat, sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
    }
    .id-pets{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        color: #000;
        font-size: 14px;
        .label{
            margin: 0 0 12px 20px;
            display: flex;
            align-items: center;
            img{
                padding-right: 7px;
                height: 20px;
            }
        }
    }
    .description{
        display: flex; 
        flex-direction: column;
        justify-content: flex-start ;
        margin: 0 0 18px 20px;
        font-size: 14px;
        font-style: normal;
        font-weight: normal;
        height: 65px;
        h3{
            font-size: 18px;
            color: #333333;
            font-style: normal;
            font-weight: normal;
            margin-bottom: 7px;
        }
    }
    @media screen and (min-width: 768px) {
        align-items: center;
        height: 60%;
        width: 100%;
        margin: 0;
        h4{ 
            margin: 0%;
        }
        .id-pets{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            width: 100vw;
            .label{
                margin: 10px 80px;
                img{
                    padding-right: 7px;
                    height: 35px;
                }
            }
        }
        .description{
            text-align: center;
            justify-content: center;
            align-items: center;
            width: 520px;
            height: 140px;
            margin: 0;
            font-size: 18px;
            border-radius: 10px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
            background-color: #fff;
            h3{
                font-size: 22px;
                text-align: center ;
            }
        }
    }
`
