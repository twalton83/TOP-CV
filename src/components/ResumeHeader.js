import React, { useState } from 'react'
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
export default function ResumeHeader( { bgcolor, color, personalInfo, handlePersonalInput }) {
  const { name, title, pitch } = personalInfo
  const [display, setDisplay] = useState({
    name: "block",
    title: "block",
    pitch: "block"
  });

  const handleClick = (e) => {
    setDisplay({
      ...display, 
      [e.target.id] : false
    })
  }



  return (
    <Header bgcolor = { bgcolor } color = { color } >
      <h2 id="name" display= {display.name} className="header-content">{ name }</h2>
      <input display= {!display.name} htmlFor="name" type="text"/>

      <h2 id="title" display= {display.title} className="header-content">{ title }</h2>
      <input display= {!display.title} htmlFor="title" type="text"/>

      <p id ="pitch" 
      display= {display.name}
      className="header-content">
        { pitch }
      </p>
      <input display= {!display.pitch} htmlFor="pitch" type="text"/>

    </Header>
  )
}
