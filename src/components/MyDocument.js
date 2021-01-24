import React, { useState } from 'react'
import styled from 'styled-components';
import ResumeHeader from './ResumeHeader';
import ResumeContact from './ResumeContact';

const ResumeSheet = styled.section`
display: grid;
grid-template-rows: 20% 20% auto;
min-height: 80vh;
max-height: 3300px;
max-width: 2550;
height: auto;
width: 70vw;
border: 1px solid black;
background-color: white;
padding: 1rem;
`

export default function MyDocument() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    title: "",
    pitch: ""
  });
  const [contactInfo, setContactInfo] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  return (
    <ResumeSheet>
      <ResumeHeader personalInfo = { personalInfo }/>
      <ResumeContact/>

    </ResumeSheet>
  )
}
