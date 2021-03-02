import React, { useState, useContext } from "react"
import styled from "styled-components"
import Project from "../modules/Project"
import {
  Modal,
  ModalHeader,
  InputContainer,
  Dialog,
  SaveButton,
} from "./StyledUtils"
import { ModalContext, ExperienceContext } from "./context"

export default function ProjectModal({ experience, editMode, handleClose }) {
  const { projects, dispatch } = useContext(ExperienceContext)
  const [proj, setProj] = useState(
    experience || {
      name: "",
      startDate: "",
      endDate: "",
      currentTask: "",
    }
  )
  const { toggleModal } = useContext(ModalContext)

  const handleClick = (e) => {
    if (editMode) {
      dispatch({
        type: "edit",
        key: "projects",
        payload: { id: experience.id, edits: proj },
      })
      handleClose(e)
      return
    }
    if (!proj.name) return
    const { name, startDate, endDate, currentTask } = proj
    toggleModal(e)
    const project = new Project(name, new Date(startDate), new Date(endDate), [
      currentTask,
    ])
    dispatch({ type: "add", key: "projects", payload: project })
  }

  const handleChange = (e) => {
    setProj({
      ...proj,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Modal>
      <Dialog>
        <button
          type="button"
          className="closeButton close"
          data-modal="project"
          onClick={toggleModal}
        >
          X
        </button>
        <div className="header">
          <ModalHeader>Project</ModalHeader>
        </div>

        <InputContainer>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={proj.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="startDate">
            Start Date:
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={proj.startDate}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="endDate">
            End Date:
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={proj.endDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="task">
            <strong>-</strong>
            <input
              type="text"
              name="currentTask"
              value={proj.currentTask}
              onChange={handleChange}
            />
          </label>
        </InputContainer>
        <SaveButton
          className="close"
          data-modal="project"
          onClick={handleClick}
        >
          Save
        </SaveButton>
      </Dialog>
    </Modal>
  )
}
