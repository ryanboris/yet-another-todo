import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import TodosContext from '../context'

const Container = styled.header`
  display: flex;
  width: 100vw;
  background: #393e46;
  height: 25vh;
  margin: 0 0 40px 0;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 9rem;
    color: #00adb5;
    span:nth-of-type(1) {
      margin-right: 5%;
    }
    span:nth-of-type(2) {
      font-size: 3rem;
      margin-left: 2%;
    }
  }
`

export default function Header() {
  const { state } = useContext(TodosContext)
  return (
    <Container>
      <h1>
        <span>{state.todos.length}</span>
        <span>Do's</span>
      </h1>
    </Container>
  )
}
