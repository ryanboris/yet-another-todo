import React from 'react'

const TodosContext = React.createContext({
  todos: [],
  currentTodo: null
})

export default TodosContext
