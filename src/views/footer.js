import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.footer`
  display: block;
  position: fixed;
  bottom: 0%;
  width: 100vw;
  margin: 0 auto;
  background: #393e46;
  height: 3vh;
  border-radius: 5px;
  justify-content: center;
  z-index: -3;
  h1 {
    font-size: 7rem;
    line-height: 20px;
    color: #00adb5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    letter-spacing: 35px;
    padding: 0 3% 0 0;
    span:nth-of-type(2) {
      letter-spacing: 1px;
      font-size: 3rem;
    }
  }
`

export default function Footer() {
  return (
    <>
      <Container />
    </>
  )
}
