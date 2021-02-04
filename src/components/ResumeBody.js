import React from "react"
import styled from "styled-components"
import WorkExperience from "./WorkExperience"
import Skills from "./Skills"
import Education from "./Education"
import Projects from "./Projects"

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

export default function ResumeBody({
  addSkill,
  skills,
  workExperience,
  education,
  projects,
  sectionDisplay,
  displayWorkModal,
  displayProjModal,
  handleProjModal,
  handleModal,
  addWorkExp,
  addProj,
}) {
  return (
    <Container>
      {sectionDisplay.work && (
        <WorkExperience
          addWorkExp={addWorkExp}
          displayModal={displayWorkModal}
          handleModal={handleModal}
          workExperience={workExperience}
        />
      )}
      {sectionDisplay.skills && <Skills addSkill={addSkill} skills={skills} />}
      {sectionDisplay.education && <Education education={education} />}
      {sectionDisplay.projects && (
        <Projects
          addProj={addProj}
          displayModal={displayProjModal}
          handleModal={handleProjModal}
          projects={projects}
        />
      )}
    </Container>
  )
}
