import React from 'react'
import styled from 'styled-components'

const Navbar = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
height: 10vh;
background-color : ${props => props.bgcolor};
`

export default function Header() {
  return (
    <Navbar bgcolor="#284B63">
      <h1>
        My.CV
      </h1>
    </Navbar> 
  )
}
