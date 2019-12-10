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
    justify-content: space-around;
    font-family: Montserrat, sans-serif;
    height: 50vh;

    .label{
        margin-left: 20px;
        display: flex;
        align-items: center;
    }
    
    @media screen and (min-width: 768px) {
        align-items: center;
        flex-direction: row;
        justify-content: center;
        display: flex;
        width: 50vw;
        height: 13vw;
        max-width: 420px;
        flex-wrap: wrap;
        .label{
            margin: 30px;
        }
       
    }
`
