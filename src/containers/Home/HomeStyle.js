import styled from 'styled-components'
import { FlexContainer } from '../../shared/Structure'

export const HomeContainer = styled(FlexContainer)`
    max-width: 100vw;
    max-height: 100vh;
    @media screen and (min-width:780px){
        flex-direction:row;
    }
`
export const HomeAside = styled(FlexContainer)`
    @media screen and (min-width:780px){
        width:40%
    }
`