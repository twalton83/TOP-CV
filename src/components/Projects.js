import React, { useState, useContext } from "react"
import styled from "styled-components"
import { format } from "date-fns"
import { v4 as uuidv4 } from "uuid"
import ProjectModal from "./ProjectModal"
import { Header, Button } from "./StyledUtils"
import { ReactComponent as Edit } from "../assets/edit-24px.svg"
import { ReactComponent as Delete } from "../assets/delete_forever-24px.svg"
import { ModalContext, ExperienceContext } from "./context"

const ProjectHeader = styled.p`
  font-size: 1.2rem;
`

const Dates = styled.em`
  font-size: 1rem;
`

const Tasks = styled.ul`
  font-size: 1rem;
`

export default function Projects() {
  const { projects, dispatch } = useContext(ExperienceContext)
  const [displayAdd, setDisplayAdd] = useState(true)
  const [displayActions, setDisplayActions] = useState(true)
  const { projectShow, toggleModal } = useContext(ModalContext)
  const [exp, setExp] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    currentTask: "",
    tasks: [],
  })

  // implement enter press to add task
  const handleSubmit = (e) => {
    e.persist()
    if (e.key === "Enter" || e.type === "blur") {
      if (exp.currentTask === "") {
        setDisplayAdd(false)
        return
      }
      setExp({
        ...exp,
        currentTask: "",
        tasks: [...exp.tasks, exp.currentTask],
      })
      setDisplayAdd(false)
    }
  }

  return (
    <div>
      <Header color="#284B63">PROJECTS</Header>
      {projects.map((proj) => (
        <div key={proj.id}>
          <ProjectHeader>{proj.name.toUpperCase()}</ProjectHeader>
          {proj.startDate && (
            <Dates>
              {format(proj.startDate, "P")} -
              {format(proj.endDate, "P") || "Current"}
            </Dates>
          )}
          {proj.tasks.length && (
            <Tasks>
              {proj.tasks.map((t) => (
                <li key={uuidv4()}>{t}</li>
              ))}
            </Tasks>
          )}
          {displayActions && (
            <div>
              <Delete
                style={{ fill: "red" }}
                onClick={() =>
                  dispatch({
                    type: "delete",
                    key: "projects",
                    payload: proj,
                  })
                }
              />
              <Edit data-projid={proj.id} data-modal="work" />
            </div>
          )}
        </div>
      ))}
      <Button data-modal="project" onClick={toggleModal}>
        ADD A PROJECT
      </Button>
      {projectShow && <ProjectModal />}
    </div>
  )
}
