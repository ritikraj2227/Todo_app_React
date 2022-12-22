import { useState } from 'react'

export default function Addtodo({ onAdd }) {

 const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("please add a todo")
      return
    }

    onAdd({ text });

    setText("")
  };

  
  return (
        <form className="todo_input" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Create a new todo..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" value='add todo'>+</button>
          </form>
      
  )
}
