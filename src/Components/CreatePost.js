import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v1 as uuid } from 'uuid'

import TodosContext from '../TodosContext'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [todos, setTodos] = useContext(TodosContext)

  function handleSubmit(e) {
    e.preventDefault()

    const titleInput = title.trim()

    if (!titleInput.split('').length) {
      return setErrorMessage('Please fill the title.')
    }

    if (errorMessage) setErrorMessage('')

    const newTodos = [{ id: uuid(), title: titleInput, isCompleted }, ...todos]

    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Todo ✅</h2>
      {errorMessage ? <p className="error-msg">{errorMessage}</p> : null}
      <label>
        <div>
          <p>Title:</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </label>
      <label>
        <div style={{ margin: '0.4rem 0' }}>
          <span style={{ marginRight: '0.5rem' }}>Completed:</span>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
        </div>
      </label>
      <button type="submit" className="add-btn">
        <FontAwesomeIcon icon={faPlusSquare} />
        <span>Add</span>
      </button>
    </form>
  )
}

export default CreatePost
