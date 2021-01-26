import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Email} from '../assets/email-24px.svg';
import {ReactComponent as Phone} from '../assets/smartphone-24px.svg';
import {ReactComponent as Address} from '../assets/location_on-24px.svg';
import {ReactComponent as Website} from '../assets/language-24px.svg';
import {ReactComponent as City} from '../assets/domain-24px.svg';


const Modal = styled.div`
z-index: 10;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,.5);
position: absolute;
top: 0;
left: 0;
`

const Dialog = styled.div`
width: 40%;
height: 30%;
background-color: #394554;
color: white;
margin: 0 auto;
margin-top: 20%;
display: grid; 

`

export default function ContactModal( { handleContactForm, handleModal }) {

  
  return (
    <Modal onClick = { handleModal }>
      <Dialog>
        <h2>
          Contact Information
        </h2>
        <label htmlFor="email">
          <Email/>
          <input type="email" name="email" id="email"/>
        </label>
        <label htmlFor="phone">
          <Phone/>
          <input type="phone" name="phone" id="phone"/>
        </label>
        <label htmlFor="city">
          <City/>
          <input type="text" name="city" id="city"/>
        </label>
        <label htmlFor="address">
          <Address/>
          <input type="text" name="address" id="address"/>
        </label>
      </Dialog>
    </Modal>
  )
}
