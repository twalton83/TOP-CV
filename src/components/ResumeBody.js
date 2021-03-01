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
  deleteSkill,
  skills,
  workExperience,
  editWorkExp,
  education,
  projects,
  sectionDisplay,
  addWorkExp,
  addProj,
  addEducation,
  deleteWork,
}) {
  return (
    <Container>
      <section>
        {sectionDisplay.work && (
          <WorkExperience
            editWork={editWorkExp}
            deleteWork={deleteWork}
            addWorkExp={addWorkExp}
            workExperience={workExperience}
          />
        )}
        {sectionDisplay.education && (
          <Education addEducation={addEducation} education={education} />
        )}
      </section>
      <section>
        {sectionDisplay.skills && (
          <Skills
            addSkill={addSkill}
            deleteSkill={deleteSkill}
            skills={skills}
          />
        )}

        {sectionDisplay.projects && (
          <Projects addProj={addProj} projects={projects} />
        )}
      </section>
    </Container>
  )
}
