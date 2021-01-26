import React, { useState } from 'react'
import styled from 'styled-components';
import ContactModal from './ContactModal';

const Section = styled.section`
display: grid;
height: auto;
grid-template-columns: ${props => props.cols};
grid-template-rows: ${props => props.rows};
border-top: 2px solid ${props => props.color};
border-bottom: 2px solid ${props => props.color};

p{
  height: 1rem;
}
`

export default function ResumeContact( { displayModal, contactItems, handleModal, handleContactInfo }) {
  const [noItems, setNoItems] = useState(Object.values(contactItems).every(v => v === ""));

  return (
    <Section >
      { noItems && <p onClick= { handleModal }> Click to start adding contacts!</p>}

      { displayModal && <ContactModal contactInfo = { contactItems } handleContactInfo = { handleContactInfo } handleModal= { handleModal }/> }
    </Section>
  )
}
