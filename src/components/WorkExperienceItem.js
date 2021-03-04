import React, { useState, useContext } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { format, isValid } from "date-fns"
import { ReactComponent as Edit } from "../assets/edit-24px.svg"
import { ReactComponent as Delete } from "../assets/delete_forever-24px.svg"
import { ExperienceContext } from "./context"

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
export default function WorkExperienceItem({ experience, handleEditClick }) {
  const [displayActions, setDisplayActions] = useState(false)
  const { dispatch } = useContext(ExperienceContext)

  const handleMouseOver = (e) => {
    e.stopPropagation()
    setDisplayActions(true)
  }

  const handleMouseLeave = (e) => {
    e.stopPropagation()
    setDisplayActions(false)
  }
  return (
    <WorkContainer
      key={experience.id}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      <WorkTitle>{experience.title}</WorkTitle>
      <WorkHeader>{experience.company}</WorkHeader>
      <Dates>
        {isValid(experience.startDate) && format(experience.startDate, "P")} -{" "}
        {(isValid(experience.endDate) && format(experience.endDate, "P")) ||
          "Current"}
      </Dates>
      <Tasks>
        {experience.tasks.map((t) => (
          <li key={uuidv4()}>{t}</li>
        ))}
      </Tasks>
      {displayActions && (
        <div>
          <Delete
            data-workid={experience.id}
            style={{ fill: "red" }}
            onClick={() =>
              dispatch({
                type: "delete",
                key: "workExperience",
                payload: experience,
              })
            }
          />
          <Edit
            data-workid={experience.id}
            data-modal="work"
            onClick={handleEditClick}
          />
        </div>
      )}
    </WorkContainer>
  )
}
