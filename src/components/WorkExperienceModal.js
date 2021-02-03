import React, { useState } from 'react'
import styled from 'styled-components';
import {ReactComponent as Company} from '../assets/domain-24px.svg';
import WorkExperience from '../modules/WorkExperience';

const Header = styled.h2`
margin: 0 auto;
width: 100%;
`

const Modal = styled.div`
z-index: 10;
width: 100vw;
height: 100%;
min-height: 107vh;
background-color: rgba(0,0,0,.5);
position: absolute;
top: 0;
left: 0;
`

const Dialog = styled.div`
width: auto;
max-width: 60vw;
height: 50%;
background-color: #394554;
color: white;
margin: 0 auto;
margin-top: 20%;
border-radius: 20px;
display: grid;
grid-template-rows: 20% 80%;

svg {
  fill: white;
  height: 24px;
  width: auto;
}

input {
  background-color: inherit;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  height: 1.2rem;
  font-size: 1.2rem;
  color: white;
  &:focus{
    border-bottom: 1px solid #1CBFAF;
  }
  ::placeholder {
    font-size: 1.2rem;
  }
}

`

const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
input {
  width: 75%;
}
`

const SaveButton = styled.button`
width: 100px;
height: 40px;
background-color: #1CBFAF;
border-radius: 30px;
border: none;
margin-left: 85%;
color: white;
font-weight: 600;
font-size: 1.1rem;
`

export default function WorkExperienceModal( { handleModal }) {
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState('');
  const [currentTask, setCurrentTask] = useState('');

  const handleClick = (e) => {
    handleModal()

  }
  
  return (
    <Modal>
      <Dialog>
        <Header>WORK EXPERIENCE</Header>
        <InputContainer>
        <label htmlFor="organization">
          <Company/>
          <input type="text" name="organization" id="organization" placeholder="Company" value={company} onChange={setCompany}/>
        </label>
        <label htmlFor="startDate">
          Start Date:
          <input type="date" name="startDate" id="startDate" value={startDate} onChange={setStartDate}/>
        </label>
        <label htmlFor="endDate">
          End Date:
          <input type="date" name="endDate" id="endDate" value={endDate} onChange={setEndDate}/>
        </label>
        <label htmlFor="task">
        <strong>-</strong>
          <input type="text" name="task" value={currentTask} onChange={setCurrentTask}/>
        </label>
        </InputContainer>
        <SaveButton> Save </SaveButton>
      </Dialog>
    </Modal>
  )
}
