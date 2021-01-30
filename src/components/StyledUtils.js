import styled from 'styled-components'

export const FlexWrapper = styled.div`
display: flex;
flex-direction: ${props => props.direction};
align-items: ${props => props.align};
height: 100%;
min-height: 100vh;
width: 100%;
background-color: ${props => props.color};
`