import React from 'react'
import styled from 'styled-components';
import { Button, Header } from './StyledUtils';

export default function WorkExperience({ workExperience }) {
  return (
    <div>
      <Header color="#284B63">WORK EXPERIENCE</Header>
      { !workExperience.length && <Button>ADD AN EXPERIENCE</Button> }
      
    </div>
  )
}
