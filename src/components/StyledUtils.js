import styled from 'styled-components'

const FlexWrapper = styled.div`
display: flex;
flex-direction: ${props => props.direction};
align-items: ${props => props.align};
height: 100%;
min-height: 100vh;
width: 100%;
background-color: ${props => props.color};
`

const Button = styled.button`
  background-color: grey;
  color: white;
  height: 2.5rem;
  width: 8rem;
  margin: 0 auto;
  margin-top: 1rem;
  border: none;
  border-radius: 20px;
  font-weight: 600;
`


const Header = styled.h3`
color: ${props => props.color};
font-size: 1.5rem;
`

export {
  Header,
  FlexWrapper,
  Button
}