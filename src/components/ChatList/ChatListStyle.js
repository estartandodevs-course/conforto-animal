import styled from 'styled-components'
import  '../../assets/fonts/fonts.css'



export const ChatListContainer = styled.div` 
    width: 90vw;
    height: 96px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    margin: 15px 0 0 0;
    .Notification{
        width: 20px;
        height: 20px;
        background-color: greenyellow;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        margin-left: auto;
    }
`
export const PersonImg = styled.img`
    max-width:75px;
    height: 70px;
    margin: 10px;
    border-radius: 50%;
    &.icon{
        max-width:auto;
        height: auto;
        border-radius: 50%;
        margin:10px;
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
    align-items: flex-start;
    
`
export const Title = styled.h2`
    color:black;
    font-family:'Montserrat',sans-serif;
    margin-top: 14px;
    font-weight: 400;
    margin-left: 18px;
   

`
export const Description = styled.div`
    display:flex;
    justify-content: space-between;
    width: 330px;

`
export const span = styled.span`
    display: flex;
    flex-direction: column;
    margin: 40px;

`

export const Topic = styled.p`   
    color: black;
    font-size: 15px;
    font-family: 'Montserrat',sans-serif;
    display:flex;
    align-items:center;
`
