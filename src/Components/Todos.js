import { useContext } from 'react'
import Todo from './Todo'
import TodosContext from '../TodosContext'
import '../styles/todos.sass'
import noTodos from './todos.svg'

const Todos = () => {
  const [todos] = useContext(TodosContext)

  return (
    <div className="todos">
      {todos.length ? (
        todos.map((todo) => <Todo key={todo.id} {...todo} />)
      ) : (
        <div>
          <img className="no-todos-image" src={noTodos} alt="React Logo" />
          <p className="no-todos">There is no todos, Let's add some!</p>
        </div>
      )}
    </div>
  )
}

export default Todos
