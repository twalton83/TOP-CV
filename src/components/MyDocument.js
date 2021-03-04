import React, { useState, useReducer } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import ResumeHeader from "./ResumeHeader"
import ResumeContact from "./ResumeContact"
import ResumeBody from "./ResumeBody"
import { ModalContext, ExperienceContext } from "./context"
import reducer from "../modules/reducer"

const ResumeSheet = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 1150px;
  max-height: 3300px;
  max-width: 2550px;
  height: auto;
  width: 70vw;
  border: 1px solid black;
  background-color: white;
  padding: 1rem;
  margin-bottom: 2rem;
`

export default function MyDocument() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "John Doe",
    title: "Professional Title",
    pitch: "A short and engaging pitch about yourself.",
  })
  const [contactInfo, setContactInfo] = useState({
    email: "",
    country: "",
    city: "",
    address: "",
    phone: "",
    website: "",
    stack: "",
    linkedin: "",
    github: "",
  })
  const [sectionDisplay, setSectionDisplay] = useState({
    work: true,
    skills: true,
    projects: true,
    education: true,
  })

  const [modalShow, setModalShow] = useState({
    workShow: false,
    projectShow: false,
    contactShow: false,
    educationShow: false,
  })

  const toggleModal = (e) => {
    const { modal } = e.target.dataset
    setModalShow({
      ...modalShow,
      [`${modal}Show`]: !modalShow[`${modal}Show`],
    })
  }
  const handlePersonalInput = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.dataset.id]: e.target.value,
    })
  }

  const handleContactInfo = (e) => {
    const contact = contactInfo[e.target.name]
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
  }

  const initialState = {
    workExperience: [],
    skills: [],
    education: [],
    projects: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ModalContext.Provider value={{ ...modalShow, toggleModal }}>
      <ExperienceContext.Provider value={{ ...state, dispatch }}>
        <ResumeSheet>
          <ResumeHeader
            personalInfo={personalInfo}
            handlePersonalInput={handlePersonalInput}
          />
          <ResumeContact
            contactItems={contactInfo}
            handleContactInfo={handleContactInfo}
          />
          <ResumeBody
            workExperience={state.work}
            projects={state.projects}
            education={state.education}
            sectionDisplay={sectionDisplay}
          />
        </ResumeSheet>
      </ExperienceContext.Provider>
    </ModalContext.Provider>
  )
}
