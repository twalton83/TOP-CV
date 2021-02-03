import React from 'react'
import styled from 'styled-components';

const Block = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
border-radius: 6px;
padding: 6px 14px;
height: 2rem;
background-color: ${props => props.bgcolor};
color: ${props => props.color};
margin: .5rem .5rem;
font-weight: 600;

`

export default function SkillBlock({ skill, bgcolor, color }) {
  return (
    <Block bgcolor={ bgcolor } color={ color }>
      <p>{ skill }</p>
    </Block>
  )
}
