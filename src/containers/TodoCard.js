import React, { useContext } from 'react'
import TodosContext from '../context'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTimes } from '@fortawesome/pro-solid-svg-icons'
import Form from '../components/Form'

const Card = styled.div`
  border: 1px solid black;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.7);
  display: inline-block;
  margin: 10px 2%;
  padding: 2%;
  width: 20vw;
  min-width: 20vw;
  height: auto;
  word-wrap: break-word;
  border-radius: 5px;
  font-size: 1rem;
`

const CardContents = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  .pencil-icon,
  .cancel-icon {
    transform: scale(1.2);
  }

  .pencil-icon {
    margin-right: 10%;
  }

  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 4vw;
    height: auto;
    word-wrap: break-word;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #393e46;
    color: #fff;
    font-size: 0.6rem;
    font-weight: bolder;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`

export default function TodoCard() {
  const { state, dispatch } = useContext(TodosContext)
  const { isEditing } = state
  return state.todos.map((todo, i) => {
    return (
      <React.Fragment key={todo.id}>
        <Card className={i}>
          {!state.isEditing ? (
            <p>{todo.text}</p>
          ) : (
            <>
              <Form />
              {todo.text}
            </>
          )}
          <CardContents>
            {!isEditing ? (
              <FontAwesomeIcon
                className="pencil-icon"
                icon={faPencil}
                onClick={() => {
                  dispatch({ type: 'SET_CURRENT_TODO', payload: todo })
                }}
              />
            ) : (
              <div className="tooltip">
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => dispatch({ type: 'TOGGLE_EDIT' })}
                />
                <span className="tooltiptext">cancel edit</span>
              </div>
            )}

            {!isEditing && (
              <FontAwesomeIcon
                icon={faTimes}
                className="cancel-icon"
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo })}
              />
            )}
          </CardContents>
        </Card>
      </React.Fragment>
    )
  })
}
