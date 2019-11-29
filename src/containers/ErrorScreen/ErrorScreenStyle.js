import styled from 'styled-components';
import '../../assets/fonts/fonts.css';

export const ErrorContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#01A58D;
    color:white;
    justify-content:center;
    align-items:center;
    min-width:98vw;
    min-height:89vh;
    font-family:'Waiting for the Sunrise',cursive;
    h1{
        font-size:25px;
    }
    p{
        border-bottom:2px solid #107768;
        cursor:pointer;
        font-size:20px;
    }
    @media screen and (max-width:825px){
        {min-height:99vh;}
    }
}
`