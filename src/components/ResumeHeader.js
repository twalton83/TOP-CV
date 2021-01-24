import React from 'react'
import styled from 'styled-components';
const Header = styled.section`
width: 100%;
background-color: ${props => props.bgcolor};
color: ${props => props.color};
display: flex;
flex-direction: column;
align-items: flex-start;
& .header-content {
margin: .5rem;
cursor: text;
outline: none;
};
`
export default function ResumeHeader( { bgcolor, color, personalInfo }) {
  const { name, title, pitch } = personalInfo

  const handleClick = (e) => {
    e.target.contentEditable = true;
  }
  
  return (
    <Header bgcolor = { bgcolor } color = { color }>
      <h2 onClick = { handleClick } className="header-content">{ name !== "" ? name : 'John Doe' }</h2>
      <h2 onClick = { handleClick } className="header-content"> { title !== "" ? title : 'Professional Title' }</h2>
      <p onClick = { handleClick } className="header-content">
      { pitch !== "" ? pitch : 'A short engaging pitch about yourself.' }
      </p>
    </Header>
  )
}
