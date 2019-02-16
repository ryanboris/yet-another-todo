import React, { useState, useContext } from 'react'
import TodosContext from '../context'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTimes } from '@fortawesome/pro-solid-svg-icons'
import Form from './Form'

const Card = styled.div`
  border: 1px solid black;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.7);
  margin: 20px;
  padding: 20px;
  display: inline-block;
  width: 20%;
  height: auto;
  word-wrap: break-word;
`

const CardContents = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  .pencil-icon,
  .cancel-icon {
    transform: scale(1.2);
  }
  .pencil-icon {
    margin-right: 10%;
  }
`

export default function Todo() {
  const { state, dispatch } = useContext(TodosContext)
  return state.todos.map(todo => {
    return (
      <>
        <Card key={todo.id}>
          <p>{todo.text}</p>
          {state.isEditing && <Form />}
          {state.isEditing && (
            <button onClick={() => dispatch({ type: 'TOGGLE_EDIT' })}>
              Cancel Edit
            </button>
          )}
          <CardContents>
            <FontAwesomeIcon
              className="pencil-icon"
              icon={faPencil}
              onClick={() => {
                dispatch({ type: 'SET_CURRENT_TODO', payload: todo })
              }}
            />

            <FontAwesomeIcon
              icon={faTimes}
              className="cancel-icon"
              onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo })}
            />
          </CardContents>
        </Card>
      </>
    )
  })
}
