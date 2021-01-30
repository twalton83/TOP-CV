import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ContactModal from './ContactModal';
import ContactItemList from './ContactItemList';

const Section = styled.section`
display: grid;
height: auto;
min-height: 10%;
grid-template-columns: ${props => props.cols};
grid-template-rows: ${props => props.rows};
border-top: 2px solid ${props => props.color};
border-bottom: 2px solid ${props => props.color};
`

const Button = styled.button`
  background-color: grey;
  color: white;
  height: 2.5rem;
  width: 8rem;
  margin: 0 auto;
  margin-top: 1rem;
  border: none;
  border-radius: 20px;
  font-weight: 600;
`

export default function ResumeContact( { displayModal, contactItems, handleModal, handleContactInfo }) {
  const [noItems, setNoItems] = useState(null);

  useEffect(() => {
    setNoItems(Object.values(contactItems).every(i => i === ""))
  }, [contactItems])

  return (
    <Section>
      { noItems && <Button onClick= { handleModal }> Add Contacts </Button>}

      { !noItems && <ContactItemList items = { contactItems } handleModal={ handleModal }/> }
      { displayModal && <ContactModal contactInfo = { contactItems } handleContactInfo = { handleContactInfo } handleModal= { handleModal }/> }
    </Section>
  )
}
