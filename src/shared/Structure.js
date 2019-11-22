import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: ${props=> props.justifyContent};
    align-items: ${props=> props.alignItems};
    flex-direction: ${props=> props.flexDirection}
`
