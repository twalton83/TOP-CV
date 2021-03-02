import React, { useContext, useState } from "react"
import styled from "styled-components"
import { Button, Header, InfoContainer } from "./StyledUtils"
import WorkExperienceModal from "./WorkExperienceModal"
import WorkExperienceItem from "./WorkExperienceItem"
import { ModalContext, ExperienceContext } from "./context"

export default function WorkExperience() {
  const { workExperience, dispatch } = useContext(ExperienceContext)

  const [editMode, setEditMode] = useState(false)

  const [experienceToEdit, setExperienceToEdit] = useState(null)
  const { workShow, toggleModal } = useContext(ModalContext)

  const handleClose = (e) => {
    if (!e.target.classList.contains("close")) return
    toggleModal(e)
    setEditMode(false)
    setExperienceToEdit(null)
  }

  const handleEditClick = (e) => {
    e.stopPropagation()
    const experience = workExperience.filter(
      (workExp) => e.currentTarget.dataset.workid === workExp.id
    )[0]
    setEditMode(true)
    setExperienceToEdit(experience)
    toggleModal(e)
  }

  return (
    <div>
      <Header color="#284B63">WORK EXPERIENCE</Header>
      {workExperience.map((exp) => (
        <WorkExperienceItem
          handleEditClick={handleEditClick}
          experience={exp}
          key={exp.id}
        />
      ))}
      <Button data-modal="work" onClick={toggleModal}>
        ADD AN EXPERIENCE
      </Button>
      {workShow && (
        <WorkExperienceModal
          editMode={editMode}
          experience={experienceToEdit}
          handleClose={handleClose}
        />
      )}
    </div>
  )
}
