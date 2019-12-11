import styled from 'styled-components'
import '../../assets/fonts/fonts.css';
import { FlexContainer } from '../../shared/Structure';


export const AdoptionContainer = styled(FlexContainer)`
    display: flex;
    flex-direction: column;
    min-height: 90vh;
    background-color: #EBEBEB;
    font-family: Montserrat, sans-serif;
    .description{
        display: flex; 
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        margin: 0 0 10px 20px;
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
    @media screen and  (min-width: 768px) {
        justify-content: center;
        align-items: center;
        .description{
            text-align: center;
            justify-content: center;
            align-items: center;
            width: 400px;
            height: 120px;
            margin: 10px 0;
            border-radius: 10px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
            background-color: #fff;
        }
        h3{
            text-align: center ;
        }
        .btn-bottom{
            width:400px;
            height: 30px;
            border-radius: 10px;
        }
    }

`
export const FormPet = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #333333;
    font-size: 25px;
    justify-content: space-around;
    font-family: Montserrat, sans-serif;
    height: 37vh;
    .id-pets{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        color: #000;
        font-size: 14px;
        .label{
            margin: 0 0 7px 20px;
            display: flex;
            align-items: center;
            img{
                padding-right: 7px;
            }
        }

    }
    @media screen and (min-width: 768px) {
        height: 30vh;
        .id-pets{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 15vh;
            .label{
                margin: 10px 90px;
                img{
                    padding-right: 7px;
                }
            }
        }

    }
`
