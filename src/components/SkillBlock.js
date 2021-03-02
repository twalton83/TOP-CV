import React, { useState, useContext } from "react"
import styled from "styled-components"
import { ExperienceContext } from "./context"

const Block = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  padding: 6px 14px;
  height: 2rem;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  margin: 0.5rem 0.5rem;
  font-weight: 600;

  .badge {
    position: absolute;
    top: -10px;
    right: -10px;

    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
    text-align: center;
    background-color: red;
    color: white;
    font-weight: 600;
  }
`

export default function SkillBlock({ skill, bgcolor, color }) {
  const [displayBadge, setDisplayBadge] = useState(false)
  const { skills, dispatch } = useContext(ExperienceContext)

  const handleDelete = (e) => {
    e.stopPropagation()
    dispatch({
      type: "delete",
      key: "skills",
      payload: { id: e.target.dataset.skill },
    })
  }

  return (
    <Block
      onMouseEnter={() => setDisplayBadge(true)}
      onMouseLeave={() => setDisplayBadge(false)}
      bgcolor={bgcolor}
      color={color}
    >
      {displayBadge && (
        <button
          type="button"
          data-skill={skill.id}
          className="badge"
          onClick={handleDelete}
        >
          X
        </button>
      )}
      <p>{skill.name}</p>
    </Block>
  )
}
