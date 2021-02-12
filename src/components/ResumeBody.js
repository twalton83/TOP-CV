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
  handleModal,
  displayModal,
  addWorkExp,
  addProj,
  addEducation,
  deleteWork,
}) {
  return (
    <Container>
      {sectionDisplay.work && (
        <WorkExperience
          deleteWork={deleteWork}
          addWorkExp={addWorkExp}
          displayModal={displayModal}
          handleModal={handleModal}
          workExperience={workExperience}
        />
      )}
      {sectionDisplay.skills && <Skills addSkill={addSkill} skills={skills} />}
      {sectionDisplay.education && (
        <Education
          addEducation={addEducation}
          displayModal={displayModal}
          handleModal={handleModal}
          education={education}
        />
      )}
      {sectionDisplay.projects && (
        <Projects
          addProj={addProj}
          displayModal={displayModal}
          handleModal={handleModal}
          projects={projects}
        />
      )}
    </Container>
  )
}
