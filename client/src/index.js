import React, { useState, useReducer } from 'react'
import { render } from 'react-dom'
import uuidv4 from 'uuid'

const toDoContext = React.createContext()

const reducer = ({ notes }, { type, payload, id }) => {
  switch (type) {
    case 'ADD':
      return {
        notes: [...notes, payload]
      }
    case 'DELETE':
      return {
        notes: notes.filter(n => n.id !== id)
      }
    case 'EDIT':

    default:
      return notes
  }
}

const App = () => {
  const [text, setText] = useState('')
  const [toggle, setToggle] = useState(false)
  const [state, dispatch] = useReducer(reducer, {
    notes: [{ id: 0, text: 'test' }]
  })

  return (
    <toDoContext.Provider value={{ state, dispatch }}>
      <>
        {state.notes.map(n => (
          <div key={uuidv4()}>
            <button onClick={() => setToggle(!toggle)}>edit</button>
            <h3 onClick={() => dispatch({ type: 'DELETE', id: n.id })}>
              {n.text}
            </h3>
          </div>
        ))}
        <form
          onSubmit={e => {
            e.preventDefault()
            dispatch({ type: 'ADD', payload: { text, id: uuidv4() } })
            setText('')
          }}
        >
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <input type="submit" value="submit" />
        </form>
      </>
    </toDoContext.Provider>
  )
}

render(<App />, document.getElementById('root'))
