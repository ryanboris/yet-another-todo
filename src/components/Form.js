import React, { useState, useContext } from 'react'
import TodosContext from '../context'
import AddIcon from '@material-ui/icons/Add'
import styled, { css } from 'styled-components'

const FormStyle = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;

  input:first-child {
    border: 1px solid #393e46;
    border-radius: 20px;
    width: 40%;
    height: 30px;
    margin-top: 20px;
    margin-right: 50px;
    margin-bottom: 50px;
    font-size: 0.8rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
  }

  .icon {
    transform: scale(1.7);
    margin-top: 22px;
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
    <div
      css={css`
        max-width: 1000px;
        margin: 0 auto;
      `}
    >
      <FormStyle onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          placeholder="enter a task"
          value={input}
          onChange={handleChange}
          maxLength={128}
        />
        <AddIcon onClick={handleSubmit} className="icon" />
      </FormStyle>
    </div>
  )
}
