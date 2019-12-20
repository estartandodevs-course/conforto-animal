import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 296px;
    height: 96px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin: 15px 0 0 0;
`
export const PetImg = styled.img`
    width:36%;
    height: 100%;
    border-radius: 15px;
    &.icon{
        max-width:auto;
        height: auto;
        border-radius: 0px;
        margin:5px;
        height:15px;
        width:auto;
    }    
`
export const About = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:80%;
    height:100%;
    border-top-right-radius:15px;
    border-bottom-right-radius:15px;    
`
export const Title = styled.h2`
    color:#333;
    font-family:Montserrat;
`
export const Description = styled.div`
    display:flex;
`
export const Topic = styled.p`   
    color: #000;
    display:flex;
    align-items:center;
    font-family:Montserrat;
    font-size:12px;
`