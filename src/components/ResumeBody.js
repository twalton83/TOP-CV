import React from 'react'
import styled from 'styled-components';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';


const Container = styled.div`
display: grid;
grid-template-columns: 50% 50%;
`

export default function ResumeBody({ skills, workExperience, education, projects, sectionDisplay }) {
  return (
    <Container>
      { sectionDisplay.work && <WorkExperience workExperience = { workExperience }/> } 
      { sectionDisplay.skills && <Skills skills={ skills } /> }
      { sectionDisplay.education && <Education education = { education } /> }
      { sectionDisplay.projects && <Projects projects = { projects } /> }
    </Container>
  )
}
