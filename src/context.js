import React from 'react'

const TodosContext = React.createContext({
  todos: [],
  currentTodo: '',
  isEditing: false
})

export default TodosContext
