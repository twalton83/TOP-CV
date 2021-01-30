import React from 'react'
import styled from 'styled-components';
import WorkExperience from './WorkExperience';
import Skills from './Skills';

const Container = styled.div`
display: grid;
grid-template-columns: 50% 50%;
`

export default function ResumeBody({ skills }) {
  return (
    <Container>
      <WorkExperience/>
      <Skills skills={ skills } />
    </Container>
  )
}
