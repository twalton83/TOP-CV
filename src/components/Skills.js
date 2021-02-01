import React from 'react'
import { Header, Button } from './StyledUtils'

export default function Skills({ skills }) {
  return (
    <div>
      <Header color="#284B63">SKILLS</Header>
      { !skills.length && <Button>ADD A SKILL</Button> }
    </div>
  )
}
