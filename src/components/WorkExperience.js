import React from 'react'
import styled from 'styled-components';
import { Button, Header } from './StyledUtils';
import WorkExperienceModal from './WorkExperienceModal';

export default function WorkExperience({ workExperience, displayModal, handleModal }) {
  return (
    <div>
      <Header color="#284B63">WORK EXPERIENCE</Header>
      { !workExperience.length && <Button onClick={ handleModal} >ADD AN EXPERIENCE</Button> }
      { displayModal && <WorkExperienceModal handleModal= { handleModal }/> }
    </div>
  )
}
