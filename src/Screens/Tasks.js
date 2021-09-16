import CreatePost from '../Components/CreatePost'
import Todos from '../Components/Todos'
import TodosContext from '../TodosContext'
import { useEffect, useState } from 'react'
import '../styles/Tasks.sass'

function Tasks() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      const parsedTodos = JSON.parse(localTodos)
      setTodos(parsedTodos)
    }
  }, [])

  return (
    <div className="Tasks">
      <TodosContext.Provider value={[todos, setTodos]}>
        <CreatePost />
        <Todos />
      </TodosContext.Provider>
    </div>
  )
}

export default Tasks
