import React, { useContext } from 'react'
import TodosContext from '../context'

export default function Todo() {
  const { state } = useContext(TodosContext)
  return (
    <>
      {state.todos.map(todo => {
        return <div key={todo.id}>{todo.text}</div>
      })}
    </>
  )
}
