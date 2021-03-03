import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import ContactModal from "./modals/ContactModal"
import ContactItemList from "./ContactItemList"
import { Button } from "./StyledUtils"
import { ModalContext } from "./context"

const Section = styled.section`
  display: grid;
  height: 100%;
  min-height: 15vh;
  grid-template-columns: ${(props) => props.cols};
  grid-template-rows: ${(props) => props.rows};
  border-top: 2px solid ${(props) => props.color};
  border-bottom: 2px solid ${(props) => props.color};
`

export default function ResumeContact({ contactItems, handleContactInfo }) {
  const [noItems, setNoItems] = useState(null)
  const { contactShow, toggleModal } = useContext(ModalContext)

  useEffect(() => {
    setNoItems(Object.values(contactItems).every((i) => i === ""))
  }, [contactItems])

  return (
    <Section>
      {noItems && (
        <Button
          style={{ marginTop: "50px" }}
          data-modal="contact"
          onClick={toggleModal}
        >
          ADD CONTACTS
        </Button>
      )}

      {!noItems && <ContactItemList items={contactItems} />}
      {contactShow && (
        <ContactModal
          contactInfo={contactItems}
          handleContactInfo={handleContactInfo}
        />
      )}
    </Section>
  )
}
