import React, { useState, useContext } from "react"
import ProjectModal from "./modals/ProjectModal"
import { Header, Button } from "./StyledUtils"

import { ModalContext, ExperienceContext } from "./context"
import ProjectItem from "./ProjectItem"

export default function Projects() {
  const { projects, dispatch } = useContext(ExperienceContext)
  const [displayAdd, setDisplayAdd] = useState(true)
  const [displayActions, setDisplayActions] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const [projectToEdit, setProjectToEdit] = useState(null)
  const { projectShow, toggleModal } = useContext(ModalContext)
  const [exp, setExp] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    currentTask: "",
    tasks: [],
  })

  // implement enter press to add task
  const handleSubmit = (e) => {
    e.persist()
    if (e.key === "Enter" || e.type === "blur") {
      if (exp.currentTask === "") {
        setDisplayAdd(false)
        return
      }
      setExp({
        ...exp,
        currentTask: "",
        tasks: [...exp.tasks, exp.currentTask],
      })
      setDisplayAdd(false)
    }
  }

  const handleClose = (e) => {
    if (!e.target.classList.contains("close")) return
    toggleModal(e)
    setEditMode(false)
    setProjectToEdit(null)
  }
  // refactor into custom hook
  const handleEditClick = (e) => {
    e.stopPropagation()
    const experience = projects.filter(
      (proj) => e.currentTarget.dataset.projid === proj.id
    )[0]
    setEditMode(true)
    setProjectToEdit(experience)
    toggleModal(e)
  }

  return (
    <div>
      <Header color="#284B63">PROJECTS</Header>
      {projects.map((proj) => (
        <ProjectItem
          key={proj.id}
          proj={proj}
          handleEditClick={handleEditClick}
        />
      ))}
      <Button data-modal="project" onClick={toggleModal}>
        ADD A PROJECT
      </Button>
      {projectShow && (
        <ProjectModal
          handleClose={handleClose}
          editMode={editMode}
          experience={projectToEdit}
        />
      )}
    </div>
  )
}
