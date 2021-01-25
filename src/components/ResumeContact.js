import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
display: grid;
grid-template-columns: ${props => props.cols};
grid-template-rows: ${props => props.rows};
border-top: 2px solid ${props => props.color};
border-bottom: 2px solid ${props => props.color};
`

export default function ResumeContact( { contactItems }) {


  return (
    <Section >
      <p>Email</p>
    </Section>
  )
}
