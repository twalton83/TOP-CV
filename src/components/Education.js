import React from "react"
import { Header, Button } from "./StyledUtils"
import EducationModal from "./EducationModal"

export default function Education({ displayModal, handleModal, education }) {
  return (
    <div>
      <Header color="#284B63">EDUCATION </Header>
      {!education.length && (
        <Button id="education" onClick={handleModal}>
          ADD EDUCATION
        </Button>
      )}
      {displayModal.education && <EducationModal handleModal={handleModal} />}
    </div>
  )
}
