import React, { useContext, useReducer } from 'react'
import ReactDOM from 'react-dom'
import TodosContext from './context'
import reducer from './reducer'
import Main from './views/main'
import Header from './views/header'
import Footer from './views/footer'
import CssBaseline from '@material-ui/core/CssBaseline'

import './index.css'

const App = () => {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <CssBaseline>
        <TodosContext.Provider value={{ state, dispatch }}>
          <Header />
          <Main />
          <Footer />
        </TodosContext.Provider>
      </CssBaseline>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
