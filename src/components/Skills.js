import React, { useContext, useState } from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from "uuid"
import { Header, Button } from "./StyledUtils"
import SkillBlock from "./SkillBlock"
import SkillInput from "./SkillInput"
import { ReactComponent as SkillAdd } from "../assets/add_circle-24px.svg"
import { ExperienceContext } from "./context"

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
`

const SkillBlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const SkillDivider = styled.div`
  border: 1px dashed #1cbfaf;
  width: 80%;
  height: 0;
`

const SkillAddContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    fill: #1cbfaf;
  }
`

export default function Skills({ deleteSkill }) {
  const [displayAdd, setDisplayAdd] = useState(false)
  const [newSkill, setnewSkill] = useState("")
  const { skills, dispatch } = useContext(ExperienceContext)
  // on click, change from a div to an input

  const handleDisplay = () => {
    setDisplayAdd(true)
  }

  const handleChange = (e) => {
    setnewSkill(e.target.value)
  }
  const handleSkillDelete = (e) => {
    e.stopPropagation()
    deleteSkill(e.target.dataset.skill)
  }

  const handleSubmit = (e) => {
    e.persist()
    if (e.key === "Enter" || e.type === "blur") {
      if (newSkill === "" || skills.includes(newSkill)) {
        setDisplayAdd(false)
        return
      }
      dispatch({
        type: "add",
        key: "skills",
        payload: { name: newSkill, id: uuidv4() },
      })
      setDisplayAdd(false)
      setnewSkill("")
    }
  }

  return (
    <Container>
      <Header color="#284B63">SKILLS</Header>
      <SkillBlockContainer onClick={handleDisplay}>
        {skills.map((skill) => (
          <SkillBlock
            key={skill.id}
            skill={skill}
            bgcolor="#989da6"
            color="#FFF"
          />
        ))}
        {displayAdd && (
          <SkillInput
            bgcolor="#989da6"
            color="#FFF"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </SkillBlockContainer>
      {displayAdd && (
        <SkillAddContainer>
          <SkillAdd>+</SkillAdd>
          <SkillDivider />
        </SkillAddContainer>
      )}

      {!skills.length ||
        (!displayAdd && (
          <Button onClick={() => setDisplayAdd(true)}>ADD A SKILL</Button>
        ))}
    </Container>
  )
}
