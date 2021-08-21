import { useContext } from 'react'
import Todo from './Todo'
import TodosContext from '../TodosContext'
import '../styles/todos.sass'

const Todos = () => {
  const [todos] = useContext(TodosContext)

  return (
    <div className="todos">
      {todos.length ? (
        todos.map((todo) => <Todo key={todo.id} {...todo} />)
      ) : (
        <p className="no-todos">There is no todos, Let's add some!</p>
      )}
    </div>
  )
}

export default Todos
