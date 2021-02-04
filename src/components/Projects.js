import React from "react"
import styled from "styled-components"
import ProjectModal from "./ProjectModal"
import { Header, Button } from "./StyledUtils"

const ProjectHeader = styled.p`
  font-size: 1.2rem;
`

const Dates = styled.em`
  font-size: 1rem;
`

const Tasks = styled.ul`
  font-size: 1rem;
`

export default function Projects({
  addProj,
  displayModal,
  handleModal,
  projects,
}) {
  return (
    <div>
      <Header color="#284B63">PROJECTS</Header>
      {!projects.length && (
        <Button id="project" onClick={handleModal}>
          ADD A PROJECT
        </Button>
      )}
      {projects.map((proj) => (
        <div>
          <ProjectHeader>{proj.name.toUpperCase()}</ProjectHeader>
          {proj.startDate && (
            <Dates>
              {proj.startDate} - {proj.endDate || "Current"}
            </Dates>
          )}
          {proj.tasks.length && (
            <Tasks>
              {proj.tasks.map((t) => (
                <li>{t}</li>
              ))}
            </Tasks>
          )}
        </div>
      ))}
      {displayModal.project && (
        <ProjectModal addProj={addProj} handleModal={handleModal} />
      )}
    </div>
  )
}
