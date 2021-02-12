import React, { useState } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { ReactComponent as Company } from "../assets/domain-24px.svg"
import { ReactComponent as Close } from "../assets/close-24px.svg"
import WorkExperience from "../modules/WorkExperience"
import {
  Modal,
  ModalHeader,
  InputContainer,
  Dialog,
  SaveButton,
  DatePicker,
} from "./StyledUtils"

const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const TaskList = styled.ul`
  li > input {
    width: 100%;
  }
`

export default function WorkExperienceModal({
  experience,
  addWorkExp,
  handleClose,
  editMode,
  edit,
}) {
  const [displayAdd, setDisplayAdd] = useState(true)

  const [exp, setExp] = useState(
    experience || {
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      currentTask: "",
      tasks: [],
    }
  )

  const handleClick = (e) => {
    // if editMode

    if (editMode) {
      // set up project to parent state and return
      edit(e.currentTarget.dataset.id)
      handleClose()
    }
    if (exp.startDate === "" || exp.company === "" || exp.title === "") return
    const { company, title, startDate, endDate, tasks } = exp
    handleClose(e)
    const newExperience = new WorkExperience(
      company,
      title,
      startDate,
      endDate,
      tasks
    )
    addWorkExp(newExperience)
  }

  const handleChange = (e) => {
    setExp({
      ...exp,
      [e.target.name]: e.target.value,
    })
  }
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
  return (
    <Modal>
      <Dialog>
        <div>
          <ModalHeader>WORK EXPERIENCE</ModalHeader>
          <Close data-modal="work" onClick={handleClose} />
        </div>
        <InputContainer>
          <label htmlFor="company">
            <Company />
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company"
              value={exp.company}
              onChange={handleChange}
              required
            />
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title/Position"
            value={exp.title}
            onChange={handleChange}
            required
          />
          <DateWrapper>
            <label htmlFor="startDate">
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={exp.startDate}
                onChange={handleChange}
                required
              />
            </label>
            <strong>-</strong>
            <label htmlFor="endDate">
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={exp.endDate}
                onChange={handleChange}
              />
            </label>
          </DateWrapper>
          <p>Tasks and Achievements:</p>
          <TaskList>
            {exp.tasks.map((task) => (
              <li key={uuidv4()}>{task}</li>
            ))}
            <li>
              <input
                id="currentTask"
                type="text"
                name="currentTask"
                value={exp.currentTask}
                onChange={handleChange}
                onKeyPress={handleSubmit}
                onBlur={handleSubmit}
              />
            </li>
          </TaskList>
        </InputContainer>
        <SaveButton data-modal="work" onClick={handleClick}>
          Save
        </SaveButton>
      </Dialog>
    </Modal>
  )
}
