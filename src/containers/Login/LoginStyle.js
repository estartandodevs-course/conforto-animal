import styled from 'styled-components'
import{ FlexContainer } from '../../shared/Structure'
import '../../assets/fonts/fonts.css'

export const LoginContainer = styled(FlexContainer)`
    background-color: #01A58D;
    width: 100vw;
    min-height:100vh;
    z-index: 6;
    position: fixed;
    top: 0;
    h1{
        font-size:18px;
        font-weight:400;
        font-style:italic;
        color:#FFF;
    }
    .socialContainer{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:200px;
        .iconSocial{
            display:flex;
            h2{
                    color:#FFF;
                    font-weight:300;
                    padding:10px;
                }
            img{
                margin:10px;
            }
        }
    }
`