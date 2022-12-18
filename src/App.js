import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Addtodo from "./Components/Addtodo";
import { useState, useEffect } from "react";

 function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      const todoFromServer = await fetchTodo();
      setTodo(todoFromServer);
    };

    getTodo();
  }, []);

  const fetchTodo = async () => {
    const res = await fetch("http://localhost:5000/todo");
    const data = await res.json();

    return data;
  };

  const addTodo = async (todo) => {
    const res = await fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(todo),
    });

    const data = await res.json();

    setTodo([...todo, data]);
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/todo/${id}`, {
      method: "DELETE",
    });

    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo_new">
      <div className="todo">
        <Header />
        <Addtodo onAdd={addTodo} />
        <Todos todo={todo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}


export default App;
