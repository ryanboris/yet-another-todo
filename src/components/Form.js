import React, { useState, useContext } from 'react'
import TodosContext from '../context'
import AddIcon from '@material-ui/icons/Add'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/pro-solid-svg-icons'

const FormStyle = styled.form`
  display: flex;
  width: 100%;
  height: 25vh;
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
  width: 90vw;
  height: 5vh;
  font-size: 1rem;
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
            maxLength={128}
          />
          <AddIcon onClick={handleSubmit} className="icon" />
          {!isEditing && todos.length < 12 && (
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              onClick={() => dispatch({ type: 'REMOVE_ALL' })}
            />
          )}
        </FormStyle>
      ) : (
        <TooManyTodos>
          Full of Do's - Please complete tasks before you continue
        </TooManyTodos>
      )}
    </div>
  )
}
