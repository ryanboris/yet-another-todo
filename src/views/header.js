import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  width: 100%;
  background: #393e46;
  border-radius: 10px;
  justify-content: center;
  h1 {
    font-family: 'Gloria Halleluja', cursive;
    font-size: 3rem;
    color: #00adb5;
  }
  box-shadow: 5px 5px 5px #00adb5;
`

export default function Header() {
  return (
    <Container>
      <header>
        <h1>2Much2Do</h1>
      </header>
    </Container>
  )
}
