/* eslint-disable prettier/prettier */
import React from "react"

const ModalContext = React.createContext({
  workShow: false,
  projectShow: false,
  contactShow: false,
  educationShow: false,
  toggleModal: () => { },
})
ModalContext.displayName = "Modal"

const ExperienceContext = React.createContext()

export { ModalContext, ExperienceContext }
