import styled from 'styled-components'
import '../../assets/fonts/fonts.css';
import { FlexContainer } from '../../shared/Structure';

export const AdoptionContainer = styled(FlexContainer)`
    background-color: #EBEBEB;
    font-family: Montserrat, sans-serif;
    align-items: center;
    height: calc(100vh - 55px);
    flex-wrap: ${props=> props.wrap === 'true' && 'wrap'};
    @media screen and (min-width: 768px){
        height: calc(100vh - 75px);
        .btn-bottom{
            width: 520px;
            font-size: 20px;
            height: 30px;
            border-radius: 10px;
        }
    }
`
export const ImgPet = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 5px;
    @media screen and (min-width: 768px){
        width: 200px;
        height: 200px; 
    }
`
export const NameStyle = styled.p`
    margin: 10px 0 10px 20px;
    color: #333333;
    font-family: Montserrat, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
`
export const DescPet = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;  
    width: 100%; 
    height: 100%;
    .id-pets{
        display: flex;
        flex-direction: column;
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
        margin: 0;
        h4{ 
            margin: 0   ;
        }
        .id-pets{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 16px;
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
