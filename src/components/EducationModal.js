import React, { useContext, useState } from "react"
import styled from "styled-components"
import { ReactComponent as Company } from "../assets/domain-24px.svg"
import Education from "../modules/Education"
import {
  Modal,
  ModalHeader,
  InputContainer,
  Dialog,
  SaveButton,
} from "./StyledUtils"
import { ReactComponent as Close } from "../assets/close-24px.svg"
import { ModalContext, ExperienceContext } from "./context"

export default function EducationModal() {
  const [newEducation, setNewEducation] = useState({
    name: "",
    startDate: "",
    endDate: "",
    degree: "",
  })
  const { education, dispatch } = useContext(ExperienceContext)

  const { toggleModal } = useContext(ModalContext)

  const handleClick = (e) => {
    const { name, startDate, endDate, degree } = newEducation
    toggleModal(e)
    const school = new Education(
      name,
      new Date(startDate),
      new Date(endDate),
      degree
    )
    dispatch({ type: "add", key: "education", payload: school })
  }

  const handleChange = (e) => {
    setNewEducation({
      ...newEducation,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Modal>
      <Dialog>
        <div>
          <ModalHeader>EDUCATION</ModalHeader>
          <Close data-modal="education" onClick={toggleModal} />
        </div>
        <InputContainer>
          <label htmlFor="name">
            <Company />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={newEducation.name}
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
              value={newEducation.startDate}
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
              value={newEducation.endDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="degree">
            Degree Type:
            <select
              name="degree"
              value={newEducation.degree}
              onBlur={handleChange}
            >
              <option value="High School Diploma">High School Diploma</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="Certificate">Certificate</option>
            </select>
          </label>
        </InputContainer>
        <SaveButton data-modal="education" onClick={handleClick}>
          Save
        </SaveButton>
      </Dialog>
    </Modal>
  )
}
