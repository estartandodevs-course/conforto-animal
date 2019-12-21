import styled from 'styled-components'
import{ FlexContainer } from '../../shared/Structure'
import{ darken } from 'polished'
import '../../assets/fonts/fonts.css'

export const SplashContainer = styled(FlexContainer)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    background-color: #01A58D;
    h1{
        font-family: 'Waiting for the Sunrise';
        color: ${darken(0.50, "#d5d5d5")};
        font-size: 30px
    }
`