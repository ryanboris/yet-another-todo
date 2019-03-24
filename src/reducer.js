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
      const { currentTodo, isEditing } = state
      const { id, completed } = currentTodo
      const i = state.todos.findIndex(todo => todo.id === id)
      if (!action.payload) return state
      if (i === -1) throw new Error(`Task does not exist.`)
      return {
        ...state,
        todos: [
          ...state.notTodos.slice(0, i),
          {
            id,
            completed,
            text: action.payload
          },
          ...state.notTodos.slice(i + 1)
        ],
        currentTodo: '',
        isEditing: !isEditing
      }

    case 'DELETE_TODO':
      const index = state.todos.findIndex(todo => todo.id === action.payload.id)
      return {
        ...state,
        todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
      }

    case 'SET_CURRENT_TODO':
      console.log(action.payload.id)
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id === action.payload.id),
        notTodos: state.todos.filter(todo => todo.id !== action.payload.id),
        currentTodo: action.payload,
        isEditing: true
      }

    case 'REMOVE_ALL':
      return {
        ...state,
        todos: [],
        currentTodo: '',
        isEditing: false
      }

    case 'TOGGLE_EDIT':
      return {
        ...state,
        isEditing: false,
        currentTodo: ''
      }
    default:
      return state
  }
}
