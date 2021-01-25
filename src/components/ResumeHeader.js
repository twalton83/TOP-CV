import React, { useState, useRef } from 'react'
import styled from 'styled-components';

const Header = styled.section`
  width: 100%;
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Input = styled.input`
  box-sizing: border-box;
  height: 2rem;
  margin: .5rem;
  width: auto;
  outline: none;
  border: none;
  border-bottom: 2px solid navy;
`

const HeaderContent = styled.p`
  margin: .5rem;
  cursor: text;
  outline: none;
  height: 2rem;
  display: ${props => props.display === "true" ? "block" : "none"};
`
export default function ResumeHeader( { bgcolor, color, personalInfo, handlePersonalInput }) {
  const { name, title, pitch } = personalInfo
  const [display, setDisplay] = useState({
    name: true,
    title: true,
    pitch: true
  });

  const handleClick = (e) => {
    setDisplay({
      ...display, 
      [e.target.id] : false
    })
  }


  const handleBlur = (e) => {
    setDisplay({
      ...display, 
      [e.target.dataset.id] : true
    })
  }



  return (
    <Header bgcolor = { bgcolor } color = { color } >
      <HeaderContent onClick = {handleClick} id="name" display= {display.name.toString()} className="header-content">{ name }</HeaderContent>

      {!display.name && <Input     
      autoFocus
      onFocus={e => e.currentTarget.select()} data-id="name" value = {name} onChange = { handlePersonalInput } onBlur = { handleBlur } htmlFor="name" type="text"/>
    }

      <HeaderContent onClick = {handleClick} id="title" display= {display.title.toString()} className="header-content">{ title }</HeaderContent>
      {!display.title && 
        <Input autoFocus data-id="title" value = {title} onChange = { handlePersonalInput } onBlur = { handleBlur } htmlFor="title" type="text"/>
      }
      <HeaderContent onClick = {handleClick} id ="pitch" 
      display= {display.pitch.toString()}
      className="header-content">
        { pitch }
      </HeaderContent>
      {!display.pitch && 
      <Input autoFocus data-id = "pitch" value = {pitch} onChange = { handlePersonalInput } onBlur = { handleBlur } htmlFor="pitch" type="text" size="100" />
      }
    </Header>
  )
}
