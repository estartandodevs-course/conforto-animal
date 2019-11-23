import styled from 'styled-components'
import { lighten } from 'polished'

export const InputContainer = styled.input`
    width: 300px;
    padding: 15px;
    border: none;
    &:focus{
        box-shadow: 0px 0px 10px ${ lighten(0.35, 'blue') };
        outline: none
    }
`