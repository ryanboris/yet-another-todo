import uuidv4 from 'uuid'
export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_DO':
      if (!action.payload) {
        return state
      }
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            id: uuidv4(),
            completed: false
          }
        ]
      }

    case 'EDIT_TODO':
      const { todos, currentTodo, isEditing } = state
      const index = state.todos.findIndex(todo => todo.id === currentTodo.id)
      if (!action.payload) {
        return state
      }
      return {
        ...state,
        todos: [
          ...todos.slice(0, index),
          {
            id: currentTodo.id,
            completed: currentTodo.completed,
            text: action.payload
          },
          ...todos.slice(index + 1)
        ],
        currentTodo: '',
        isEditing: !isEditing
      }

    case 'SET_CURRENT_TODO':
      return {
        ...state,
        currentTodo: action.payload,
        isEditing: !isEditing
      }

    case 'REMOVE_ALL':
      return {
        ...state,
        todos: []
      }

    case 'TOGGLE_EDIT':
      return {
        ...state,
        isEditing: false
      }
    default:
      return state
  }
}
