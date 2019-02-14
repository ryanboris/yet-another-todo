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

    case 'REMOVE_ALL':
      return {
        todos: []
      }

    default:
      return state
  }
}
