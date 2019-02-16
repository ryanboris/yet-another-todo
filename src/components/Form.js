import React, { useState, useContext } from 'react'
import TodosContext from '../context'
import styled from 'styled-components'

const FormStyle = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-around;

  input:first-child {
    border: 1px solid white;
    border-radius: 2px;
    width: 40%;
    height: 30px;
    box-shadow: 1px 3px 20px #00adb5;
  }
`

export default function Form() {
  const [input, setInput] = useState('')
  const {
    state: { currentTodo = {} },
    dispatch
  } = useContext(TodosContext)

  const handleChange = e => setInput(e.target.value)

  const handleReset = e => {
    e.preventDefault()
    setInput('')
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (currentTodo.text) {
      dispatch({ type: 'EDIT_TODO', payload: input })
    } else {
      dispatch({ type: 'ADD_TO_DO', payload: input })
    }
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
          maxLength={128}
        />
        <input type="submit" />
        <input type="reset" />
      </FormStyle>
    </>
  )
}
