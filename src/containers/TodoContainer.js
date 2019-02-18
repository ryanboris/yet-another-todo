import React from 'react'
import TodoCard from '../components/TodoCard'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export default function TodoContainer() {
  return (
    <>
      <Container>
        <TodoCard style={{ width: '25vw' }} />
      </Container>
    </>
  )
}
