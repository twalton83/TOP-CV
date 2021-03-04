import React, { useState, useContext } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import Project from "../../modules/Project"
import {
  Modal,
  ModalHeader,
  InputContainer,
  Dialog,
  SaveButton,
} from "../StyledUtils"
import { ModalContext, ExperienceContext } from "../context"

const TaskList = styled.ul`
  margin-top: 0;
  width: 80%;
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    button {
      height: 24px;
      width: 24px;
      background-color: transparent;
      border: none;
      border-radius: 50%;
      color: white;
      font-weight: 600;
      text-align: center;
    }
  }
  li > input {
    width: 100%;
  }
`

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

  const handleTaskSubmit = (e) => {
    e.persist()
    if (e.key === "Enter" || e.type === "blur") {
      if (proj.currentTask === "") {
        return
      }
      setProj({
        ...proj,
        currentTask: "",
        tasks: [...proj.tasks, proj.currentTask],
      })
    }
  }
  const handleTaskDelete = (e) => {
    const tasks = experience.tasks.filter(
      (task) => task !== e.target.previousSibling.textContent
    )
    setProj({
      ...proj,
      tasks,
    })
  }
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
          <TaskList>
            {proj.tasks.map((task) => (
              <li key={uuidv4()}>
                <p>{task}</p>
                <button type="button" onClick={handleTaskDelete}>
                  X
                </button>
              </li>
            ))}
            <li>
              <input
                id="currentTask"
                type="text"
                name="currentTask"
                value={proj.currentTask}
                onChange={handleChange}
                onKeyPress={handleTaskSubmit}
                onBlur={handleTaskSubmit}
              />
            </li>
          </TaskList>
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
