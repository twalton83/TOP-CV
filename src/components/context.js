/* eslint-disable prettier/prettier */
import React from "react"

const ModalContext = React.createContext({
  work: false,
  project: false,
  contact: false,
  education: false,
  toggleModal: () => { },
})
ModalContext.displayName = "Modal"

const ExperienceContext = React.createContext()

export { ModalContext, ExperienceContext }
