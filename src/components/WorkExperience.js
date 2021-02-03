import React from 'react'
import styled from 'styled-components';
import { Button, Header } from './StyledUtils';
import WorkExperienceModal from './WorkExperienceModal';

const WorkHeader = styled.p`
font-size: 1.2rem;
`

const Dates = styled.em`
font-size: 1rem;
`

const Tasks = styled.ul`
font-size: 1rem;
`

export default function WorkExperience({ addWorkExp, workExperience, displayModal, handleModal }) {
  return (
    <div>
      <Header color="#284B63">WORK EXPERIENCE</Header>
      {/* { !workExperience.length && <Button onClick={ handleModal} >ADD AN EXPERIENCE</Button> } */}
      { displayModal && <WorkExperienceModal addWorkExp={ addWorkExp } handleModal= { handleModal }/> }
      { workExperience.map(exp => (
        <div>
          <WorkHeader>{exp.company.toUpperCase()}</WorkHeader>
          <Dates>{exp.startDate}  - {exp.endDate || 'Current'}</Dates>
          <Tasks>
            {exp.tasks.map(t => 
            <li>
              {t}
            </li>
            )}
          </Tasks>
        </div>
      ))}
      <Button onClick={ handleModal} >ADD AN EXPERIENCE</Button>
    </div>
  )
}
