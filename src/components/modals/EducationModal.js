import React, { useContext, useState } from "react"
import styled from "styled-components"
import { ReactComponent as Company } from "../../assets/domain-24px.svg"
import Education from "../../modules/Education"
import {
  Modal,
  ModalHeader,
  InputContainer,
  Dialog,
  SaveButton,
} from "../StyledUtils"
import { ModalContext, ExperienceContext } from "../context"

export default function EducationModal({ handleClose, editMode, experience }) {
  const [newEducation, setNewEducation] = useState(
    experience || {
      name: "",
      startDate: "",
      endDate: "",
      degree: "",
    }
  )
  const { dispatch } = useContext(ExperienceContext)

  const { toggleModal } = useContext(ModalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editMode) {
      dispatch({
        type: "edit",
        key: "education",
        payload: { id: experience.id, edits: newEducation },
      })
      handleClose(e)
      return
    }
    if (newEducation.startDate === "" || newEducation.name === "") return
    const { name, startDate, endDate, degree } = newEducation

    const school = new Education(
      name,
      new Date(startDate),
      new Date(endDate),
      degree
    )
    dispatch({ type: "add", key: "education", payload: school })
    toggleModal(e)
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
        <button
          type="button"
          className="closeButton close"
          data-modal="education"
          onClick={toggleModal}
        >
          X
        </button>
        <div>
          <ModalHeader>EDUCATION</ModalHeader>
        </div>
        <form onSubmit={handleSubmit} data-modal="education">
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
              Start:
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
              End:
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
          <SaveButton type="submit" className="close" data-modal="education">
            Save
          </SaveButton>
        </form>
      </Dialog>
    </Modal>
  )
}
