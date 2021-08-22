import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquare,
  faCheckSquare,
  faMinusSquare,
} from '@fortawesome/free-solid-svg-icons'
import TodosContext from '../TodosContext'
import '../styles/todo.sass'

const Todo = ({ title, isCompleted, id }) => {
  const [todos, setTodos] = useContext(TodosContext)

  function handleCheck() {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  function handleDelete() {
    const newTodos = todos.filter((todo) => todo.id !== id)
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  return (
    <div title={title} className="todo">
      <span onClick={handleCheck}>
        {isCompleted ? (
          <FontAwesomeIcon className="icon" icon={faCheckSquare} />
        ) : (
          <FontAwesomeIcon className="icon" icon={faSquare} />
        )}
      </span>
      <FontAwesomeIcon
        className="icon delete-btn"
        icon={faMinusSquare}
        onClick={() => handleDelete()}
      />
      <span
        style={
          isCompleted ? { textDecoration: 'line-through', color: '#999' } : null
        }
      >
        {title}
      </span>
    </div>
  )
}

export default Todo
