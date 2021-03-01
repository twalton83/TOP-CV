import React, { useState, useReducer } from "react"
import styled from "styled-components"
import ResumeHeader from "./ResumeHeader"
import ResumeContact from "./ResumeContact"
import ResumeBody from "./ResumeBody"
import {
  generateWork,
  generateEducation,
  generateProject,
} from "../modules/seeds"
import { ModalContext, ExperienceContext } from "./context"

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

  const [workExperience, setWorkExperience] = useState(generateWork())
  const [skills, setSkills] = useState(["React", "Javascript", "HTML", "CSS"])
  const [education, setEducation] = useState(generateEducation())
  const [projects, setProjects] = useState(generateProject())
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

  const addWorkExperience = (experience) => {
    setWorkExperience([...workExperience, experience])
  }

  const addProj = (project) => {
    setProjects([...projects, project])
  }

  const addEducation = (school) => {
    setEducation([...education, school])
  }

  const addSkill = (skill) => {
    setSkills([...skills, skill])
  }

  const deleteSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const handleContactInfo = (e) => {
    const contact = contactInfo[e.target.name]
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value })
  }

  const deleteWork = (id) => {
    const filteredWork = workExperience.filter((exp) => id !== exp.id)
    setWorkExperience(filteredWork)
  }

  const editWorkExp = (id, updates) => {
    const experiences = workExperience.filter((exp) => exp.id !== id)
    const experienceToEdit = workExperience.filter((exp) => id === exp.id)[0]
    experienceToEdit.edit(updates)
    setWorkExperience([...experiences, experienceToEdit])
  }

  return (
    <ModalContext.Provider value={{ ...modalShow, toggleModal }}>
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
          addSkill={addSkill}
          deleteSkill={deleteSkill}
          deleteWork={deleteWork}
          editWorkExp={editWorkExp}
          addWorkExp={addWorkExperience}
          addEducation={addEducation}
          skills={skills}
          workExperience={workExperience}
          addProj={addProj}
          projects={projects}
          education={education}
          sectionDisplay={sectionDisplay}
        />
      </ResumeSheet>
    </ModalContext.Provider>
  )
}
