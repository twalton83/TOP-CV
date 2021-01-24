import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
display: grid;
grid-template-columns: ${props => props.cols};
grid-template-rows: ${props => props.rows};
border: 1px solid red;
`

export default function ResumeContact( { contactItems }) {


  return (
    <Section>
      <p>Email</p>
    </Section>
  )
}
