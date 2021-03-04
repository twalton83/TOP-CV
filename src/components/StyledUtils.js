import styled from "styled-components"

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.color};
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

const Header = styled.h3`
  text-align: left;
  color: ${(props) => props.color};
  font-size: 1.5rem;
`

const ModalHeader = styled.h2``

const Modal = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
`

const Dialog = styled.div`
  position: relative;
  z-index: 20;
  width: auto;
  max-width: 50vw;
  height: 50%;
  background-color: #394554;
  color: white;
  margin: 0 auto;
  margin-top: 20%;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15% 70% 15%;

  svg {
    fill: white;
    height: 24px;
    width: auto;
    path {
      pointer-events: none;
    }
  }

  label {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  input {
    width: 100%;
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
  .header {
    position: relative;
  }
  .closeButton {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    border: none;
    color: white;
    font-weight: 600;
    padding: 0;
    z-index: 999;
  }
`

const InputContainer = styled.div`
  width: auto;
  height: 100%;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  input {
    width: 75%;
  }
`

const SaveButton = styled.button`
  z-index: 2;
  width: 100px;
  height: 40px;
  background-color: #1cbfaf;
  border-radius: 30px;
  border: none;
  margin-left: auto;
  margin-right: 1rem;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
`

const DatePicker = styled.input`
  background-color: inherit;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  height: 1.2rem;
  width: auto !important;
  font-size: 1.2rem;
  color: white;
  &:focus {
    border-bottom: 1px solid #1cbfaf;
  }
  ::placeholder {
    font-size: 1.2rem;
  }
`

const InfoContainer = styled.div`
  text-align: left;
`

export {
  Header,
  FlexWrapper,
  Button,
  Modal,
  ModalHeader,
  Dialog,
  SaveButton,
  InputContainer,
  InfoContainer,
  DatePicker,
}
