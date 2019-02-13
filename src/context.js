import React from 'react'

const TodosContext = React.createContext({
  todos: [{ text: '', id: 0, completed: false }]
})

export default TodosContext
