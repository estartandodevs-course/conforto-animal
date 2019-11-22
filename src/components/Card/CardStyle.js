import styled from 'styled-components'
import{ darken, lighten } from 'polished'

export const CardContainer = styled.div`
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: red;
    h1{
        color: ${lighten(0.25, 'black')};
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`