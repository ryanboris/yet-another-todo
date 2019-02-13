import React, { useContext } from 'react'
import TodosContext from '../context'

export default function Todo() {
  const { state } = useContext(TodosContext)
  return (
    <>
      {state.todos.map(todo => (
        <div>{todo.text}</div>
      ))}
    </>
  )
}
