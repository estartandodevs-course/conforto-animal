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
    max-width:100px;
    height: 96px;
    border-radius: 15px;
    &.icon{
        max-width:auto;
        height: auto;
        border-radius: 0px;
        margin:5px;
    }
    
`
export const About = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
    border-top-right-radius:15px;
    border-bottom-right-radius:15px;
    
`
export const Title = styled.h2`
    color:black;

`
export const Description = styled.div`
    display:flex;
`
export const Topic = styled.p`   
    color: green;
    display:flex;
    align-items:center;
`
