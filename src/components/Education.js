import React from "react"
import { Header, Button } from "./StyledUtils"

export default function Education({ education }) {
  return (
    <div>
      <Header color="#284B63">EDUCATION </Header>
      {!education.length && <Button>ADD EDUCATION</Button>}
    </div>
  )
}
