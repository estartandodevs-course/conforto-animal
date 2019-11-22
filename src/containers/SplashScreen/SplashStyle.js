import styled from 'styled-components'
import{ Container } from '../../shared/Structure'
import{ darken } from 'polished'

export const SplashContainer = styled(Container)`
    width: 100vw;
    height: 100vh;
    background-color: #d5d5d5;
    h1{
        color: ${darken(0.50, "#d5d5d5")};
        font-size: 35px
    }
`