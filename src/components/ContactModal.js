import React, { useState } from "react"
import styled from "styled-components"
import { ReactComponent as Email } from "../assets/email-24px.svg"
import { ReactComponent as Phone } from "../assets/smartphone-24px.svg"
import { ReactComponent as Address } from "../assets/location_on-24px.svg"
import { ReactComponent as Website } from "../assets/language-24px.svg"
import { ReactComponent as Country } from "../assets/flag-24px.svg"
import { ReactComponent as City } from "../assets/domain-24px.svg"
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg"
import { ReactComponent as StackOverflow } from "../assets/stack-overflow.svg"
import { ReactComponent as Github } from "../assets/github-logo.svg"

const Modal = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100%;
  min-height: 107vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`

const Dialog = styled.div`
  width: 60%;
  height: 40%;
  background-color: #394554;
  color: white;
  margin: 0 auto;
  margin-top: 20%;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr 1fr;
  border-radius: 20px;

  svg {
    fill: white;
    height: 24px;
    width: auto;
  }

  input {
    background-color: inherit;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    height: 1.2rem;
    font-size: 1.2rem;
    color: white;
    &:focus {
      border-bottom: 1px solid #1cbfaf;
    }
    ::placeholder {
      font-size: 1.2rem;
    }
  }
`

const LeftTabButton = styled.button`
  border-radius: 5px 0px 0px 5px;
  background-color: ${(props) => (props.active ? "#1CBFAF" : "inherit")};
  color: white;
  &:hover {
    background-color: #1cbfaf;
  }
  width: 150px;
  height: 40px;
  font-size: 1rem;
  border: 1px solid #1cbfaf;
  outline: none;
  font-weight: 600;
`

const RightTabButton = styled.button`
  border-radius: 0px 5px 5px 0px;
  background-color: ${(props) => (props.active ? "#1CBFAF" : "inherit")};
  color: white;
  &:hover {
    background-color: #1cbfaf;
  }
  width: 150px;
  height: 40px;
  font-size: 1rem;
  border: 1px solid #1cbfaf;
  outline: none;
  font-weight: 600;
`

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  input {
    width: 75%;
  }
`

const SaveButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #1cbfaf;
  border-radius: 30px;
  border: none;
  margin-left: 85%;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
`

export default function ContactModal({
  contactInfo,
  handleContactInfo,
  handleModal,
}) {
  const [showGeneralContact, setShowGeneralContact] = useState(true)
  const {
    email,
    country,
    city,
    address,
    phone,
    website,
    github,
    stack,
    linkedin,
  } = contactInfo
  return (
    <Modal>
      <Dialog>
        <h2>Contact Information</h2>
        <div>
          <LeftTabButton
            active={showGeneralContact}
            onClick={() => setShowGeneralContact(true)}
          >
            Main Contact
          </LeftTabButton>
          <RightTabButton
            active={!showGeneralContact}
            onClick={() => setShowGeneralContact(false)}
          >
            Social
          </RightTabButton>
        </div>

        {showGeneralContact && (
          <InputContainer>
            <label htmlFor="email">
              <Email />
              <input
                value={email.value}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleContactInfo}
              />
            </label>
            <label htmlFor="phone">
              <Phone />
              <input
                value={phone.value}
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone"
                onChange={handleContactInfo}
              />
            </label>
            <label htmlFor="address">
              <Country />
              <input
                value={country.value}
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                onChange={handleContactInfo}
              />
            </label>
            <label htmlFor="city">
              <City />
              <input
                type="text"
                value={city.value}
                name="city"
                id="city"
                placeholder="City"
                onChange={handleContactInfo}
              />
            </label>
            <label htmlFor="address">
              <Address />
              <input
                value={address.value}
                type="text"
                name="address"
                id="address"
                placeholder="Street Address"
                onChange={handleContactInfo}
              />
            </label>
          </InputContainer>
        )}

        {!showGeneralContact && (
          <InputContainer>
            <label htmlFor="website">
              <Website />
              <input
                type="text"
                value={website.value}
                name="website"
                id="website"
                placeholder="Website"
                onChange={handleContactInfo}
              />
            </label>
            <label htmlFor="github">
              <Github />
              <input
                type="text"
                value={github.value}
                name="github"
                id="github"
                placeholder="Github"
                onChange={handleContactInfo}
              />
            </label>
            <label htmlFor="city">
              <LinkedIn />
              <input
                type="text"
                value={linkedin.value}
                name="linkedin"
                id="linkedin"
                placeholder="LinkedIn"
                onChange={handleContactInfo}
              />
            </label>
            <label htmlFor="stack">
              <StackOverflow />
              <input
                type="text"
                value={stack.value}
                name="stack"
                id="stack"
                placeholder="Stack Overflow"
                onChange={handleContactInfo}
              />
            </label>
          </InputContainer>
        )}
        <SaveButton name="contact" onClick={handleModal}>
          Save
        </SaveButton>
      </Dialog>
    </Modal>
  )
}
