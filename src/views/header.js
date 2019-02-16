import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.header`
  display: flex;
  width: 100vw;
  margin: 0 auto 50px auto;
  background: #393e46;
  border-radius: 5px;
  justify-content: center;
  h1 {
    font-size: 7rem;
    line-height: 20px;
    color: #00adb5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 35px;
    padding: 0 3% 0 0;
    span {
      letter-spacing: 1px;
      font-size: 3rem;
    }
  }
`

export default function Header() {
  return (
    <Container>
      <h1>
        2<span>Do's</span>
      </h1>
    </Container>
  )
}
