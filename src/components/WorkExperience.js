import React, { useState } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { Button, Header } from "./StyledUtils"
import WorkExperienceModal from "./WorkExperienceModal"
import { ReactComponent as Edit } from "../assets/edit-24px.svg"
import { ReactComponent as Delete } from "../assets/delete_forever-24px.svg"

const WorkHeader = styled.p`
  font-size: 1.4rem;
  margin: 0;
`
const WorkTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
`

const WorkContainer = styled.div`
  text-align: left;
`
const Dates = styled.em`
  font-size: 1rem;
`

const Tasks = styled.ul`
  font-size: 1rem;
  padding-left: 20px;
`

export default function WorkExperience({
  addWorkExp,
  workExperience,
  displayModal,
  handleModal,
  deleteWork,
}) {
  const [displayActions, setDisplayActions] = useState(false)

  const handleMouseOver = (e) => {
    e.stopPropagation()
    setDisplayActions(true)
  }

  const handleMouseLeave = (e) => {
    e.stopPropagation()
    setDisplayActions(false)
  }

  const handleDelete = (e) => {
    deleteWork(e.target.id)
  }

  return (
    <div>
      <Header color="#284B63">WORK EXPERIENCE</Header>
      {workExperience.map((exp) => (
        <WorkContainer
          key={exp.id}
          onMouseOver={handleMouseOver}
          onFocus={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onBlur={handleMouseLeave}
        >
          <WorkTitle>{exp.title}</WorkTitle>
          <WorkHeader>{exp.company}</WorkHeader>
          <Dates>
            {exp.startDate} - {exp.endDate || "Current"}
          </Dates>
          <Tasks>
            {exp.tasks.map((t) => (
              <li key={uuidv4()}>{t}</li>
            ))}
          </Tasks>
          {displayActions && (
            <div>
              <Delete
                id={exp.id}
                style={{ fill: "red" }}
                onClick={handleDelete}
              />
              <Edit />
            </div>
          )}
        </WorkContainer>
      ))}
      <Button id="work" onClick={handleModal}>
        ADD AN EXPERIENCE
      </Button>
      {displayModal.work && (
        <WorkExperienceModal
          addWorkExp={addWorkExp}
          handleModal={handleModal}
        />
      )}
    </div>
  )
}
