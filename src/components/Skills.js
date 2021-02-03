import React, { useState } from 'react'
import styled from 'styled-components';
import { Header, Button } from './StyledUtils'

const SkillBlock = styled.div`
background-color: ${props => props.bgcolor};
margin: 0 1rem;
`

const SkillsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

export default function Skills({ skills }) {

  const [toggleDisplay, setToggleDisplay] = useState(false);
  
  return (
    <div>
      <Header color="#284B63">SKILLS</Header>
      <SkillsContainer>
        { skills.map(skill => (
        <SkillBlock bgcolor="#989da6">
          { skill }
        </SkillBlock>
        ))}
      </SkillsContainer>

      { !skills.length && <Button>ADD A SKILL</Button> }
    </div>
  )
}
