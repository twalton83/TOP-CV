import React, { useState } from 'react'
import styled from 'styled-components';
import { Header, Button } from './StyledUtils'
import SkillBlock from './SkillBlock';
import SkillInput from './SkillInput';
import {ReactComponent as SkillAdd} from '../assets/add_circle-24px.svg';


const Container = styled.div`
display: grid;
grid-template-rows: 1fr auto 1fr;
`

const SkillBlockContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`


const SkillDivider = styled.div`
border: 1px dashed #1CBFAF;
width: 80%;
height: 0;
`

const SkillAddContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
svg {
  fill: #1CBFAF
};
`

export default function Skills({ skills }) {

  const [displayAdd, setDisplayAdd] = useState(false);
  const [newSkill, setnewSkill] = useState('');

  // on click, change from a div to an input 

  // state should pop up with an add skill input that gets added to the end 

  // when hit enter or lose focus, skill is added

  const [toggleDisplay, setToggleDisplay] = useState(false);

  const handleDisplay = ()=> {
    setDisplayAdd(true)
  }

  const handleChange = (e) => {
    setnewSkill(e.target.value)
  }

  const handleSubmit = (e) => {
    e.persist();
    console.log(e.key)
  }
  
  return (
    <Container>
      <Header color="#284B63">SKILLS</Header>
      <SkillBlockContainer onClick = {handleDisplay}>
        { skills.map(skill => (
        <SkillBlock skill =  { skill } bgcolor="#989da6" color="#FFF"/>
        ))}
        {displayAdd && <SkillInput bgcolor="#989da6" color="#FFF" handleChange = { handleChange } handleSubmit={handleSubmit}/>}
      </SkillBlockContainer>
      { displayAdd && 
        <SkillAddContainer>
           <SkillAdd>+</SkillAdd>
           <SkillDivider></SkillDivider>
        </SkillAddContainer>
       }

      { !skills.length && <Button>ADD A SKILL</Button> }
    </Container>
  )
}
