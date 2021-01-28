import React, { useState } from 'react'
import styled from 'styled-components';
import ResumeHeader from './ResumeHeader';
import ResumeContact from './ResumeContact';

const ResumeSheet = styled.section`
display: flex;
flex-direction: column;
min-height: 80vh;
max-height: 3300px;
max-width: 2550px;
height: 90vh;
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
    pitch: "A short and engaging pitch about yourself."
  });
  const [contactInfo, setContactInfo] = useState({
    email: {
      image: "../assets/email-24px.svg",
      value: ""
    },
    country: {
      image: "../assets/flag-24px.svg",
      value: ""
    },
    city: {
      image: "../assets/domain-24px.svg",
      value: ""
    },
    address: {
    image:"../assets/location_on-24px.svg",
    value: ""
    },
    phone: {
      image: "../assets/smartphone-24px.svg",
      value: ""
    },
    website: {
      image: "../assets/language-24px.svg",
      value: ""
    },
    stack : {
      image: "../assets/stack-overflow.svg",
      value: ""
    },
    linkedin: {
      image: "../assets/linkedin.svg",
      value: ""
    },
    github: {
      image: "../assets/github-logo.svg",
      value: ""
    }
  });

  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handlePersonalInput = (e) => {
    setPersonalInfo({
      ...personalInfo,
      [e.target.dataset.id] : e.target.value
    })
  }

  const handleContactInfo = (e) => {
    const contact = contactInfo[e.target.name]
    setContactInfo({...contactInfo, 
      [e.target.name] : { ...contact, value : e.target.value}
    })
  }
  
  const handleModalShow = (e) => {
    setModalShow(!modalShow)
  }
  
  return (
    <ResumeSheet>
      <ResumeHeader personalInfo = { personalInfo } handlePersonalInput = { handlePersonalInput } />
      <ResumeContact displayModal = { modalShow } handleModal = { handleModalShow } contactItems = { contactInfo } handleContactInfo = { handleContactInfo } />

    </ResumeSheet>
  )
}
