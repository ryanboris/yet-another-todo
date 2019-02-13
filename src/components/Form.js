import React, { useState, useContext } from 'react'
import TodosContext from '../context'

export default function Form() {
  const [input, setInput] = useState('')
  const { dispatch } = useContext(TodosContext)

  const handleChange = e => setInput(e.target.value)

  const handleReset = e => {
    e.preventDefault()
    setInput('')
  }
  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'ADD_TO_DO', payload: input })
    setInput('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          placeholder="enter a task"
          value={input}
          onChange={handleChange}
        />
        <input type="submit" />
        <input type="reset" />
      </form>
      <button onClick={() => dispatch({ type: 'REMOVE_ALL' })}>
        Clear All
      </button>
    </>
  )
}
