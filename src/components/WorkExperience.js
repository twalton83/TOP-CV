import React, { useState } from "react"
import styled from "styled-components"

import { Button, Header, InfoContainer } from "./StyledUtils"
import WorkExperienceModal from "./WorkExperienceModal"
import WorkExperienceItem from "./WorkExperienceItem"

export default function WorkExperience({
  addWorkExp,
  editWork,
  workExperience,
  displayModal,
  handleModal,
  deleteWork,
}) {
  const [editMode, setEditMode] = useState(false)

  const [experienceToEdit, setExperienceToEdit] = useState(null)

  const handleDelete = (e) => {
    deleteWork(e.currentTarget.dataset.workid)
  }

  const handleClose = (e) => {
    if (!e.target.classList.contains("close")) return
    handleModal(e)
    setEditMode(false)
    setExperienceToEdit(null)
  }

  const handleEditClick = (e) => {
    e.stopPropagation()
    const experience = workExperience.filter(
      (work) => e.currentTarget.dataset.workid === work.id
    )[0]
    setEditMode(true)
    setExperienceToEdit(experience)
    handleModal(e)
  }

  return (
    <div>
      <Header color="#284B63">WORK EXPERIENCE</Header>
      {workExperience.map((exp) => (
        <WorkExperienceItem
          handleDelete={handleDelete}
          handleEditClick={handleEditClick}
          experience={exp}
        />
      ))}
      <Button data-modal="work" onClick={handleModal}>
        ADD AN EXPERIENCE
      </Button>
      {displayModal.work && (
        <WorkExperienceModal
          editMode={editMode}
          editWork={editWork}
          experience={experienceToEdit}
          addWorkExp={addWorkExp}
          handleClose={handleClose}
        />
      )}
    </div>
  )
}
