import React from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { Button, Header } from "./StyledUtils"
import WorkExperienceModal from "./WorkExperienceModal"

const WorkHeader = styled.p`
  font-size: 1.2rem;
`

const Dates = styled.em`
  font-size: 1rem;
`

const Tasks = styled.ul`
  font-size: 1rem;
`

export default function WorkExperience({
  addWorkExp,
  workExperience,
  displayModal,
  handleModal,
}) {
  return (
    <div>
      <Header color="#284B63">WORK EXPERIENCE</Header>
      {displayModal.work && (
        <WorkExperienceModal
          addWorkExp={addWorkExp}
          handleModal={handleModal}
        />
      )}
      {workExperience.map((exp) => (
        <div>
          <WorkHeader>{exp.company.toUpperCase()}</WorkHeader>
          <Dates>
            {exp.startDate} - {exp.endDate || "Current"}
          </Dates>
          <Tasks>
            {exp.tasks.map((t) => (
              <li key={uuidv4()}>{t}</li>
            ))}
          </Tasks>
        </div>
      ))}
      <Button id="work" onClick={handleModal}>
        ADD AN EXPERIENCE
      </Button>
    </div>
  )
}
