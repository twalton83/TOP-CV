import React, { useContext, useState } from "react"
import styled from "styled-components"
import { format } from "date-fns"
import { Header, Button } from "./StyledUtils"
import EducationModal from "./EducationModal"
import { ReactComponent as Edit } from "../assets/edit-24px.svg"
import { ReactComponent as Delete } from "../assets/delete_forever-24px.svg"
import { ModalContext } from "./context"

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

  const handleDelete = (e) => {
    console.log("delete")
  }

  const handleEditClick = (e) => {
    e.stopPropagation()
    const experience = education.filter(
      (edu) => e.currentTarget.dataset.eduid === edu.id
    )[0]
    setEditMode(true)
    setEducationToEdit(experience)
    handleModal(e)
  }
  return (
    <div>
      <Header color="#284B63">EDUCATION </Header>
      {education.map((edu) => (
        <div>
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
                data-eduid={edu.id}
                style={{ fill: "red" }}
                onClick={handleDelete}
              />
              <Edit
                data-eduid={edu.id}
                data-modal="work"
                onClick={handleEditClick}
              />
            </div>
          )}
        </div>
      ))}
      {educationShow && (
        <EducationModal addEducation={addEducation} handleModal={handleModal} />
      )}
      <Button data-modal="education" onClick={toggleModal}>
        ADD EDUCATION
      </Button>
    </div>
  )
}
