import React, { useState, useContext } from 'react'
import TodosContext from '../context'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'

const FormStyle = styled.form`
  display: flex;
  width: 100%;
  height: 15vh;
  justify-content: space-evenly;
  align-items: center;

  input:first-child {
    border: 2px solid #393e46;
    border-radius: 20px;
    width: 50%;
    min-width: 40%;
    height: 2vh;
    font-size: 1.2rem;
    text-align: center;
    margin: 0 4% 0 0;
  }

  .icon {
    transform: scale(1.7);
  }
`

const TooManyTodos = styled.div`
  width: 80vw;
  border-radius: 40px;
  border: 2px solid #393e46;
  margin: 0 auto 10vh auto;
  max-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  word-wrap: break-word;
  font-size: 1.5rem;
  color: #393e46;
  background: #00adb5;
  text-align: center;
`

export default function Form() {
  const [input, setInput] = useState('')
  const {
    state: { currentTodo = {}, todos, isEditing },
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
    <div>
      {todos.length < 12 ? (
        <FormStyle onSubmit={handleSubmit} onReset={handleReset}>
          <input
            type="text"
            placeholder="task"
            value={input}
            onChange={handleChange}
            maxLength="128"
          />
          <AddIcon onClick={handleSubmit} className="icon" />
          {!isEditing && todos.length < 12 && (
            <button onClick={() => dispatch({ type: 'REMOVE_ALL' })}>
              REMOVE ALL
            </button>
          )}
        </FormStyle>
      ) : (
        <TooManyTodos>Complete 1 task to continue.</TooManyTodos>
      )}
    </div>
  )
}
