import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Header, Button } from "./StyledUtils"
import EducationModal from "./modals/EducationModal"
import { ModalContext, ExperienceContext } from "./context"
import EducationItem from "./EducationItem"

export default function Education() {
  const { education, dispatch } = useContext(ExperienceContext)
  const { educationShow, toggleModal } = useContext(ModalContext)

  const [editMode, setEditMode] = useState(false)

  const [educationToEdit, setEducationToEdit] = useState(null)

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
        <EducationItem edu={edu} handleEditClick={handleEditClick} />
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
