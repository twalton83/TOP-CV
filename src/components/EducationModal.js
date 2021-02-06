import React, { useState } from "react"
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

export default function EducationModal({ addEducation, handleModal }) {
  const [education, setEducation] = useState({
    name: "",
    startDate: "",
    endDate: "",
    degree: "",
  })

  const handleClick = (e) => {
    const { name, startDate, endDate, degree } = education
    handleModal(e)
    const school = new Education(name, startDate, endDate, degree)
    addEducation(school)
  }

  const handleChange = (e) => {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Modal>
      <Dialog>
        <ModalHeader>EDUCATION</ModalHeader>
        <InputContainer>
          <label htmlFor="name">
            <Company />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={education.name}
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
              value={education.startDate}
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
              value={education.endDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="degree">
            Degree Type:
            <select value={education.degree} onBlur={handleChange}>
              <option value="High School Diploma">High School Diploma</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="Certificate">Certificate</option>
            </select>
          </label>
        </InputContainer>
        <SaveButton id="education" onClick={handleClick}>
          Save
        </SaveButton>
      </Dialog>
    </Modal>
  )
}
