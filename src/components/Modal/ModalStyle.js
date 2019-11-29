import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    transition: .3s;
    display:flex;
    justify-content:center;
    align-items:center;
    #close{
        position: absolute;
        top: 0;
        left: 0;
        margin: 15px;
        color: white;
        font-size: 34px
    }
`