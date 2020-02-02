import styled from 'styled-components'
import { FlexContainer } from '../../shared/Structure'
import fundo from '../../assets/images/fundo.png'

export const ChatContainer = styled(FlexContainer)`
    max-width: 100vw;
    max-height: 100vh;
`

export const HomeAside = styled(FlexContainer)`
background:#107768;
min-height:100vh;
background-image: url(${fundo});
background-size: cover;
   
`