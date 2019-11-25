import styled from 'styled-components'
import { lighten } from 'polished'

export const InputContainer = styled.input`
    width: 300px;
    height:26px;
    padding: 5px;
    border: none;
    border-radius: 7px;
    &:focus{
        box-shadow: 0px 0px 10px ${ lighten(0.35, 'blue') };
        outline: none
    }
`