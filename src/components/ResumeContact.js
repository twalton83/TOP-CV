import React, { useState, useEffect } from "react"
import styled from "styled-components"
import ContactModal from "./ContactModal"
import ContactItemList from "./ContactItemList"
import { Button } from "./StyledUtils"

const Section = styled.section`
  display: grid;
  height: auto;
  min-height: 10%;
  grid-template-columns: ${(props) => props.cols};
  grid-template-rows: ${(props) => props.rows};
  border-top: 2px solid ${(props) => props.color};
  border-bottom: 2px solid ${(props) => props.color};
`

export default function ResumeContact({
  displayModal,
  contactItems,
  handleModal,
  handleContactInfo,
}) {
  const [noItems, setNoItems] = useState(null)

  useEffect(() => {
    setNoItems(Object.values(contactItems).every((i) => i === ""))
  }, [contactItems])

  return (
    <Section>
      {noItems && <Button onClick={handleModal}> ADD CONTACTS </Button>}

      {!noItems && (
        <ContactItemList items={contactItems} handleModal={handleModal} />
      )}
      {displayModal.contact && (
        <ContactModal
          contactInfo={contactItems}
          handleContactInfo={handleContactInfo}
          handleModal={handleModal}
        />
      )}
    </Section>
  )
}
