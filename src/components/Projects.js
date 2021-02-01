import React from 'react'
import { Header, Button } from './StyledUtils'


export default function Projects({ projects }) {
  return (
    <div>
      <Header color="#284B63">PROJECTS</Header>
      { !projects.length && <Button>ADD A PROJECT </Button> }
    </div>
  )
}