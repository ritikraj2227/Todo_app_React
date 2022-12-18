import { useState } from 'react'

export default function Addtodo({ onAdd}) {

 const [todo, setTodo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()

    if (!todo) {
      alert("please add a todo")
      return
    }

    onAdd({ todo });

    setTodo("")
  };
  return (
        <form className="todo_input" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Create a new todo..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" value='add todo'>+</button>
          </form>
      
  )
}
