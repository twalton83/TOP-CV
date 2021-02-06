import React, { useState } from "react"
import { ReactComponent as Company } from "../assets/domain-24px.svg"
import WorkExperience from "../modules/WorkExperience"
import {
  Modal,
  ModalHeader,
  InputContainer,
  Dialog,
  SaveButton,
} from "./StyledUtils"

export default function WorkExperienceModal({ addWorkExp, handleModal }) {
  const [exp, setExp] = useState({
    company: "",
    startDate: "",
    endDate: "",
    currentTask: "",
  })

  const handleClick = (e) => {
    const { company, startDate, endDate, currentTask } = exp
    handleModal(e)
    const experience = new WorkExperience(company, startDate, endDate, [
      currentTask,
    ])
    addWorkExp(experience)
  }

  const handleChange = (e) => {
    setExp({
      ...exp,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Modal>
      <Dialog>
        <ModalHeader>WORK EXPERIENCE</ModalHeader>
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
          <label htmlFor="startDate">
            Start Date:
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={exp.startDate}
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
              value={exp.endDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="task">
            Tasks
            <strong>-</strong>
            <input
              type="text"
              name="currentTask"
              value={exp.currentTask}
              onChange={handleChange}
            />
          </label>
        </InputContainer>
        <SaveButton id="work" onClick={handleClick}>
          Save
        </SaveButton>
      </Dialog>
    </Modal>
  )
}
