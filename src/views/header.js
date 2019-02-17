import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import TodosContext from '../context'

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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0 3% 0 0;
    span:nth-of-type(2) {
      font-size: 3rem;
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
