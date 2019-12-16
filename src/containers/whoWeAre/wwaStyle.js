import styled from 'styled-components'
import logoModified from '../../assets/images/logoModified.png'
import '../../assets/fonts/fonts.css'

export const ContainerWWA = styled.div`
    min-width:97vw;
    min-height:100vh;
    background-color:#107768;
    background-image: url("${logoModified}");
    background-position:cover;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family: 'Montserrat', sans-serif;
    #Title_desk{
        display:none;
    }
    @media screen and  (min-width: 768px) {
        #Title_desk{
            display:flex;
        }
    }
`
export const BoxWWA = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    width:80%;
    height:100%;
    margin:10px 0px;
    background: rgba(196, 196, 196, 0.75);
    @media screen and  (min-width: 768px) {
        width:60%;
    }
`
export const ContentWWA = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:90%;
    margin:5px 0px;
    p{
        margin:10px 0px;
    }
    .subTitle{
        display: flex;
        justify-content: center;
        align-items:center;
        h1{
            color:#006455;
            font-size:26px
        }
    }
    span{
        color:#006455;
    }
    @media screen and  (min-width: 768px) {
        #Title_mob{
            display:none;
        }
    }
`
export const Retangle = styled.div`
    width: 32px;
    height: 0px;
    border: 2px solid #006455;
    margin:5px;
`
export const Participants = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width:100%;
    .subContent{
        margin:5px 0px;
        h1{
            margin:5px 0px;
            color:#006455;
            font-size:20px
        }
    }
`