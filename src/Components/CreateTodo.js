import { useState, useContext, forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v1 as uuid } from 'uuid'

import TodosContext from '../TodosContext'

const CreatePost = forwardRef((_, ref) => {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useContext(TodosContext)

  function handleSubmit(e) {
    e.preventDefault()

    const titleInput = title.trim()

    if (!titleInput.split('').length) {
      setTitle('')
      return alert('Please fill the title.')
    }

    const newTodos = [
      { id: uuid(), title: titleInput, isCompleted: false },
      ...todos,
    ]

    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
    setTitle('')
  }

  return (
    <form className='create-todo' onSubmit={handleSubmit}>
      <input
        ref={ref}
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Create Todo ✅'
      />
      <button type='submit' className='add-btn'>
        <FontAwesomeIcon icon={faPlusSquare} />
        <span>Add</span>
      </button>
    </form>
  )
})

export default CreatePost
