import React, { useContext, useState } from "react"
import styled from "styled-components"
import { format } from "date-fns"
import { Header, Button } from "./StyledUtils"
import EducationModal from "./EducationModal"
import { ReactComponent as Edit } from "../assets/edit-24px.svg"
import { ReactComponent as Delete } from "../assets/delete_forever-24px.svg"
import { ModalContext, ExperienceContext } from "./context"

const EducationHeader = styled.p`
  font-size: 1.2rem;
`

const Dates = styled.em`
  font-size: 1rem;
`

export default function Education() {
  const { education, dispatch } = useContext(ExperienceContext)
  const { educationShow, toggleModal } = useContext(ModalContext)
  const [displayActions, setDisplayActions] = useState(true)
  const [editMode, setEditMode] = useState(false)

  const [educationToEdit, setEducationToEdit] = useState(null)

  const handleMouseOver = (e) => {
    e.stopPropagation()
    setDisplayActions(true)
  }

  const handleMouseLeave = (e) => {
    e.stopPropagation()
    setDisplayActions(false)
  }

  const handleClose = (e) => {
    if (!e.target.classList.contains("close")) return
    toggleModal(e)
    setEditMode(false)
    setEducationToEdit(null)
  }

  const handleEditClick = (e) => {
    e.stopPropagation()
    const experience = education.filter(
      (edu) => e.currentTarget.dataset.eduid === edu.id
    )[0]
    setEditMode(true)
    setEducationToEdit(experience)
    toggleModal(e)
  }
  return (
    <div>
      <Header color="#284B63">EDUCATION </Header>
      {education.map((edu) => (
        <div key={edu.id}>
          <EducationHeader>{edu.name.toUpperCase()}</EducationHeader>
          {edu.startDate && (
            <Dates>
              {format(edu.startDate, "P")} -{" "}
              {format(edu.endDate, "P") || "Current"}
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
        </div>
      ))}
      {educationShow && (
        <EducationModal
          handleClose={handleClose}
          editMode={editMode}
          experience={educationToEdit}
        />
      )}
      <Button data-modal="education" onClick={toggleModal}>
        ADD EDUCATION
      </Button>
    </div>
  )
}
