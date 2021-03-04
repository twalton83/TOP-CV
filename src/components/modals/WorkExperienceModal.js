import React, { useState, useContext } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { ReactComponent as Company } from "../../assets/domain-24px.svg"
import { ReactComponent as Title } from "../../assets/assignment_ind-24px.svg"
import { ReactComponent as Tasks } from "../../assets/view_list-24px.svg"
import WorkExperience from "../../modules/WorkExperience"
import {
  Modal,
  ModalHeader,
  InputContainer,
  Dialog,
  SaveButton,
  DatePicker,
} from "../StyledUtils"
import { ModalContext, ExperienceContext } from "../context"

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
  handleClose,
  editMode,
}) {
  const { dispatch } = useContext(ExperienceContext)
  const { toggleModal } = useContext(ModalContext)
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
    if (editMode) {
      dispatch({
        type: "edit",
        key: "workExperience",
        payload: { id: experience.id, edits: exp },
      })
      handleClose(e)
      return
    }
    if (exp.startDate === "" || exp.company === "" || exp.title === "") return
    const { company, title, startDate, endDate, tasks } = exp
    handleClose(e)
    const newExperience = new WorkExperience(
      company,
      title,
      new Date(startDate),
      new Date(endDate),
      tasks
    )
    dispatch({ type: "add", key: "workExperience", payload: newExperience })
  }

  const handleChange = (e) => {
    setExp({
      ...exp,
      [e.target.name]: e.target.value,
    })
  }
  // implement enter press to add task
  const handleTaskSubmit = (e) => {
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
    <Modal className="close" onClick={handleClose}>
      <Dialog>
        <button
          type="button"
          className="closeButton close"
          data-modal="work"
          onClick={toggleModal}
        >
          X
        </button>
        <div>
          <ModalHeader>WORK EXPERIENCE</ModalHeader>
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
          <label htmlFor="title">
            <Title />
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title/Position"
              value={exp.title}
              onChange={handleChange}
              required
            />
          </label>
          <DateWrapper>
            <label htmlFor="startDate">
              <strong>Start Date:</strong>
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
              End Date:
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
                onKeyPress={handleTaskSubmit}
                onBlur={handleTaskSubmit}
              />
            </li>
          </TaskList>
        </InputContainer>
        <SaveButton
          className="close"
          data-modal="work"
          data-id={exp.id}
          onClick={handleClick}
        >
          Save
        </SaveButton>
      </Dialog>
    </Modal>
  )
}
