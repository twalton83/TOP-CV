import React from "react"
import styled from "styled-components"
import { Header, Button } from "./StyledUtils"
import EducationModal from "./EducationModal"

const EducationHeader = styled.p`
  font-size: 1.2rem;
`

const Dates = styled.em`
  font-size: 1rem;
`

export default function Education({
  addEducation,
  displayModal,
  handleModal,
  education,
}) {
  return (
    <div>
      <Header color="#284B63">EDUCATION </Header>
      {!education.length && (
        <Button data-modal="education" onClick={handleModal}>
          ADD EDUCATION
        </Button>
      )}

      {education.map((edu) => (
        <div>
          <EducationHeader>{edu.name.toUpperCase()}</EducationHeader>
          {edu.startDate && (
            <Dates>
              {edu.startDate} - {edu.endDate || "Current"}
            </Dates>
          )}
          <p>{edu.degree}</p>
        </div>
      ))}
      {displayModal.education && (
        <EducationModal addEducation={addEducation} handleModal={handleModal} />
      )}
    </div>
  )
}
