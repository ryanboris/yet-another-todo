import React, { useContext } from 'react'
import TodoContainer from '../containers/TodoContainer'
import Form from '../components/Form'
import TodosContext from '../context'
export default function Main() {
  const { state } = useContext(TodosContext)
  return (
    <div
      css={`
        margin: 0 auto;
      `}
    >
      {!state.isEditing && <Form />}
      <TodoContainer />
    </div>
  )
}
