import React, { useState, useContext } from "react"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"
import { format } from "date-fns"
import { ReactComponent as Edit } from "../assets/edit-24px.svg"
import { ReactComponent as Delete } from "../assets/delete_forever-24px.svg"
import { ExperienceContext } from "./context"

const ProjectHeader = styled.p`
  font-size: 1.2rem;
`

const Dates = styled.em`
  font-size: 1rem;
`

const Tasks = styled.ul`
  font-size: 1rem;
`

export default function ProjectItem({ proj, handleEditClick }) {
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
    <div
      key={proj.id}
      onMouseOver={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onBlur={handleMouseLeave}
    >
      <ProjectHeader>{proj.name.toUpperCase()}</ProjectHeader>
      {proj.startDate && (
        <Dates>
          {format(proj.startDate, "P")} -
          {format(proj.endDate, "P") || "Current"}
        </Dates>
      )}
      {proj.tasks.length && (
        <Tasks>
          {proj.tasks.map((t) => (
            <li key={uuidv4()}>{t}</li>
          ))}
        </Tasks>
      )}
      {displayActions && (
        <div>
          <Delete
            style={{ fill: "red" }}
            onClick={() =>
              dispatch({
                type: "delete",
                key: "projects",
                payload: proj,
              })
            }
          />
          <Edit
            data-projid={proj.id}
            data-modal="project"
            onClick={handleEditClick}
          />
        </div>
      )}
    </div>
  )
}
