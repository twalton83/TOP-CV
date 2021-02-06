import React, { useState } from "react"
import styled from "styled-components"
import Project from "../modules/Project"
import {
  Modal,
  ModalHeader,
  InputContainer,
  Dialog,
  SaveButton,
} from "./StyledUtils"

export default function ProjectModal({ addProj, handleModal }) {
  const [proj, setProj] = useState({
    name: "",
    startDate: "",
    endDate: "",
    currentTask: "",
  })

  const handleClick = (e) => {
    const { name, startDate, endDate, currentTask } = proj
    handleModal(e)
    const project = new Project(name, startDate, endDate, [currentTask])
    console.log(project)
    addProj(project)
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
        <ModalHeader>Project</ModalHeader>
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
        <SaveButton id="project" onClick={handleClick}>
          Save
        </SaveButton>
      </Dialog>
    </Modal>
  )
}