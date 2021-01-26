import React from 'react'
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

export default function ResumeContact( { displayModal, contactItems, handleModal }) {


  return (
    <Section >
      { contactItems.length === 0 && <p onClick= { handleModal }> Click to start adding contacts!</p>}
      { displayModal && <ContactModal handleModal= { handleModal }/> }
    </Section>
  )
}
