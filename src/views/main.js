import React, { useContext } from 'react'
import TodoContainer from '../containers/TodoContainer'
import Form from '../components/Form'
import TodosContext from '../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/pro-solid-svg-icons'

export default function Main() {
  const { state, dispatch } = useContext(TodosContext)
  return (
    <div
      css={`
        position: relative;
      `}
    >
      {!state.isEditing && state.todos.length < 12 && (
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          onClick={() => dispatch({ type: 'REMOVE_ALL' })}
          style={{
            display: 'inline-block',
            position: 'fixed',
            left: '75%',
            marginTop: '19px',
            marginLeft: '7%'
          }}
        />
      )}
      <div
        css={`
          margin: 0 auto;
          position: relative;
        `}
      >
        {!state.isEditing && <Form />}
        <TodoContainer />
      </div>
    </div>
  )
}
