import React, { useState, useContext } from 'react'
import TodosContext from '../context'
import styled from 'styled-components'

const FormStyle = styled.form`
  display: grid;
  grid-template-columns: 1fr;

  input:first-of-type {
    grid-column: span 1;
  }

  input:nth-of-type(2) {
    max-width: 50%;
  }
`

export default function Form() {
  const [input, setInput] = useState('')
  const { state, dispatch } = useContext(TodosContext)

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
      <FormStyle onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          placeholder="enter a task"
          value={input}
          onChange={handleChange}
        />
        {input.length > 0 && <input type="submit" />}
        {input.length > 0 && <input type="reset" />}
      </FormStyle>
      {state.todos.length > 0 && (
        <button onClick={() => dispatch({ type: 'REMOVE_ALL' })}>
          Clear All
        </button>
      )}
    </>
  )
}
