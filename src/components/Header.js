import React from "react"
import styled from "styled-components"
import { ReactComponent as Logo } from "../assets/logo.svg"

const Navbar = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 10vh;
  background-color: ${(props) => props.bgcolor};
  padding-left: 1rem;

  h1 {
    color: white;
  }

  svg {
    fill: white;
    margin-left: 0.5rem;
  }
`

export default function Header() {
  return (
    <Navbar bgcolor="#284B63">
      <h1>My.CV</h1>
      <Logo />
    </Navbar>
  )
}
