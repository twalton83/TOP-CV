import React, { useState } from 'react'
import styled from 'styled-components';

const Input = styled.input`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;
padding: 6px 14px;
height: 2rem;
width: auto;
background-color: ${props => props.bgcolor};
color: ${props => props.color};
margin: .5rem .5rem;
border: none;
outline: none;
`


export default function SkillInput({ skill, bgcolor, color, handleChange, handleSubmit }) {

  // const [updatedSkill, setUpdatedSkill] = useState("");

  return (
    <Input onBlur={ handleSubmit } onKeyPress={ handleSubmit } onChange={handleChange} bgcolor={ bgcolor } color={ color } type="text" value = { skill } placeholder= "Skill" autoFocus size={10}/>
  )
}
