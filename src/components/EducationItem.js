import React, { useState, useContext } from "react"
import styled from "styled-components"
import { format, isValid } from "date-fns"
import { ExperienceContext } from "./context"
import { ReactComponent as Edit } from "../assets/edit-24px.svg"
import { ReactComponent as Delete } from "../assets/delete_forever-24px.svg"

const EducationHeader = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`

const EducationContainer = styled.div`
  text-align: left;
`

const Dates = styled.em`
  font-size: 1rem;
`

export default function EducationItem({ edu, handleEditClick }) {
  const { dispatch } = useContext(ExperienceContext)
  const [displayActions, setDisplayActions] = useState(false)
  const handleMouseOver = (e) => {
    e.stopPropagation()
    setDisplayActions(true)
  }

  const handleMouseLeave = (e) => {
    e.stopPropagation()
    setDisplayActions(false)
  }
  return (
    <EducationContainer
      key={edu.id}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      <EducationHeader>{edu.name.toUpperCase()}</EducationHeader>
      {isValid(edu.startDate) && (
        <Dates>
          {format(edu.startDate, "P")} -{" "}
          {(isValid(edu.endDate) && format(edu.endDate, "P")) || "Current"}
        </Dates>
      )}
      <p>{edu.degree}</p>
      {displayActions && (
        <div>
          <Delete
            style={{ fill: "red" }}
            onClick={() =>
              dispatch({
                type: "delete",
                key: "education",
                payload: edu,
              })
            }
          />
          <Edit
            data-eduid={edu.id}
            data-modal="education"
            onClick={handleEditClick}
          />
        </div>
      )}
    </EducationContainer>
  )
}
