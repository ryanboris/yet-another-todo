import React, { useContext, useReducer } from 'react'
import ReactDOM from 'react-dom'
import TodosContext from './context'
import reducer from './reducer'
import Main from './views/main'
import Header from './views/header'
import Sidebar from './views/sidebar'
import Footer from './views/footer'

const App = () => {
  const initialState      = useContext(TodosContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <Header />
      <Sidebar />
      <TodosContext.Provider value = {{ state, dispatch }}>
        <Main />
      </TodosContext.Provider>
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
