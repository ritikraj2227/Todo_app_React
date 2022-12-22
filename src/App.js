import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Addtodo from "./Components/Addtodo";
import { useState, useEffect } from "react";

 function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      const todoFromServer = await fetchTodo();
      setTodos(todoFromServer);
    };

    getTodo();
  }, []);

  const fetchTodo = async () => {
    const res = await fetch("http://localhost:5000/todos");
    const data = await res.json();

    return data;
  };

  const addTodo = async (todo) => {
    const res = await fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(todo),
    });

    const data = await res.json();

    setTodos([...todos, data]);
  };

  const deleteTodo = async (id) => {
     await fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    });


    setTodos(todos.filter((todos) => todos.id !== id))
  };

  return (
    <>
    <div className="todo_new">
    </div>
      <div className="todo">
        <Header />
        <Addtodo onAdd={addTodo} />
        <Todos todo={todos} onDelete={deleteTodo} />
      </div>
    
    
      </>
  );
}


export default App;
