import React from 'react'
import Todo from '../components/Todo'
import styled from 'styled-components/macro'

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 0 0 5%;
`

export default function TodoContainer() {
  return (
    <Container>
      <Todo style={{ width: '25vw' }} />
    </Container>
  )
}
