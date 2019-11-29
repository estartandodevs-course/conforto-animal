import styled from 'styled-components'
import '../../assets/fonts/fonts.css';
export const ButtonContainer = styled.button`
    width: 148px;
    height: 30px;
    font-family: Montserrat, sans-serif;
    border: none;
    border-radius: 10px;
    background-color: #01A58D;
    color: #fff;
    /* margin-left:auto; */
    
    &:focus{
        outline:none;
    }
    
    &.btn-bottom{
        width: 100%;
        height: 55px;
        border-radius: 0;
        font-size: 18px;
        position: fixed;
        bottom: 0;
    }

    &.btn-menu{
        border: 2px solid white;
        border-radius: 30px;
        margin:5px;
    }

`;