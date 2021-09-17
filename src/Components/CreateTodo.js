import { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlusSquare,
  faCheckSquare,
  faSquare,
} from '@fortawesome/free-solid-svg-icons'
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
      setTitle('')
      return setErrorMessage('Please fill the title.')
    }

    if (errorMessage) setErrorMessage('')

    const newTodos = [{ id: uuid(), title: titleInput, isCompleted }, ...todos]

    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
    setTitle('')
  }

  return (
    <form className="create-todo" onSubmit={handleSubmit}>
      <h2>Create Todo ✔️</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <label className="iscompleted">
        <span>Completed:</span>
        <FontAwesomeIcon
          onClick={() => setIsCompleted((prev) => !prev)}
          className="icon"
          icon={isCompleted ? faCheckSquare : faSquare}
        />
      </label>
      {errorMessage ? <p className="error-msg">{errorMessage}</p> : null}
      <button type="submit" className="add-btn">
        <FontAwesomeIcon icon={faPlusSquare} />
        <span>Add</span>
      </button>
    </form>
  )
}

export default CreatePost
