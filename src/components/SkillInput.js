import React, { useState } from 'react'
import styled from 'styled-components';

const Input = styled.input`
border-radius: 6px;
outline: none;
padding: .2rem;
height: 1.5rem;
min-width: 2rem;
width: auto;
background-color: ${props => props.bgcolor};
color: ${props => props.color};
margin: 0 1rem;
border: none;
`


export default function SkillInput({ skill, bgcolor, color, handleChange, handleSubmit }) {

  const [updatedSkill, setUpdatedSkill] = useState("");


  return (
    <Input onKeyPress={ handleSubmit} Change={handleChange} bgcolor={ bgcolor } color={ color } type="text" value = { skill } autoFocus />
  )
}
