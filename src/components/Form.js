import React, { useState, useContext } from 'react'
import TodosContext from '../context'
import AddIcon from '@material-ui/icons/Add'
import styled, { css } from 'styled-components'

const FormStyle = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;

  input:first-child {
    border: 2px solid #393e46;
    border-radius: 20px;
    width: 55vw;
    height: 30px;
    margin: 20px 0 40px 1%;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
  }

  .icon {
    transform: scale(1.7);
    margin: 22px 5% 0 2%;
  }
`

const TooManyTodos = styled.div`
  width: 90vw;
  height: 5vh;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
`

export default function Form() {
  const [input, setInput] = useState('')
  const {
    state: { currentTodo = {}, todos },
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
      {todos.length < 12 ? (
        <FormStyle onSubmit={handleSubmit} onReset={handleReset}>
          <input
            type="text"
            placeholder="task"
            value={input}
            onChange={handleChange}
            maxLength={128}
          />
          <AddIcon onClick={handleSubmit} className="icon" />
        </FormStyle>
      ) : (
        <TooManyTodos>
          Full of Do's - Please complete tasks before you continue
        </TooManyTodos>
      )}
    </div>
  )
}
