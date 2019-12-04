import styled from 'styled-components'

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color:#01A58D;
    transition: .3s;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
    font-family:'Monteserrat';
    #Title{
        height:100px
    }
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
    .Icones{
        display:flex;
        height:250px
        div{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin:10px
            width:128px;
            height:128px;
            img{
                border:5px solid white;
                border-radius:15px;
                padding:5px
            }
            h1{
                font-weight: normal;
                font-size: 18px;
            }
        }
    }
    h2{
        font-weight:300;
        font-size:24px;
        padding:10px;
    }
    h3{
        font-weight:500;
        font-size:18px;
        font-style:italic;
        padding:5px
    }
`