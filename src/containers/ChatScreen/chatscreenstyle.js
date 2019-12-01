import styled from 'styled-components'
import { FlexContainer } from '../../shared/Structure'
import cachorro from '../../assets/images/cachorroBack.png'
import gato from '../../assets/images/GatoBack.png'


export const HomeAside = styled(FlexContainer)`
background:#107768;
min-height:100vh;
background-image: url(${cachorro})50% ,url(${gato})50%;
background-position:
    top right, /* this positions the first image */
    bottom left; /* this positions the second image */
  background-repeat:
    repeat; 
`