import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import { useRef } from 'react'

function App() {

  const [todos, setTodos] = useState([])
  const inputref = useRef()
  const BASE_URL = 'http://localhost:3000'

  async function getData() {
    try {
      const response = await fetch('http://localhost:3000/todos')
      const data = await response.json()
      console.log(data)
      setTodos(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {

    getData()

  }, [])

  console.log(todos)

  async function handleSumbit(event) {
    event.preventDefault()

    const todo = {
      text: inputref.current.value
    }
    //to send to the server use a post request 

    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'content-type': 'application/json'
      }
    })

    const newTodo = await response.json()

    console.log(newTodo)

    setTodos([...todos, newTodo])

  }

  async function handleDelete(id) {
    console.log(id)
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'DELETE'
    })
    getData()
  }

  return (
    <>
      <h1>Todos</h1>
      {/* Hello (from frontend) */}
      <form onSubmit={handleSumbit}>
        <input type="text" ref={inputref} />
        <button>Submit</button>
      </form>

      <ul>
        {todos.map(todo =>
          <li key={todo._id}>
            <input type='checkbox' />
            {todo.text}
            <button onClick={() => handleDelete(todo._id)}>X</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default App