import styled from 'styled-components'

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: .3s;
    display:flex;
    background-color:#01A58D;
`

const Title = styled.p`
    font-family: Montserrat, sans-serif;
    color: #FFFFFF;

`
export const ModalDonate = styled(ModalContainer)`
    #close{
        position: absolute;
        top: 0;
        left: 0;
        margin: 15px;
        color: white;
        font-size: 34px;
        padding:5px;
        width:20px;
        height:20px;
        transform:rotate(180deg)
        border:1px solid white;
        border-radius:15px;
    }
    flex-direction:column;
    justify-content:center;
    align-items:center;
    .Icones{
        display:flex;
        width: 100%;
        justify-content: space-around;
        div{
            display:flex;
            flex-direction:column;
            align-items:center;
            img{
                border:5px solid white;
                border-radius:15px;
                padding:16px
            }
        }
    }
`
export const DonateTitle = styled(Title)`
    font-weight: 600;
    font-size: 24px;
    margin: 0 0 50px 0;
`
export const SubTitle = styled(Title)`
    font-size: 16px;
    margin: 12px 0 0 0;
    text-transform: capitalize;
`