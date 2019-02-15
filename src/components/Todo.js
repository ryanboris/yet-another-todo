import React, { useContext } from 'react'
import TodosContext from '../context'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTimes } from '@fortawesome/pro-solid-svg-icons'

const Card = styled.div`
  border: 1px solid black;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: auto;
`

export default function Todo() {
  const { state, dispatch } = useContext(TodosContext)
  return state.todos.map(todo => {
    return (
      <>
        <Card key={todo.id}>
          <p>{todo.text}</p>
          <FontAwesomeIcon
            icon={faPencil}
            onClick={() => {
              dispatch({ type: 'SET_CURRENT_TODO', payload: todo })
            }}
          />

          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo })}
          />
        </Card>
      </>
    )
  })
}
