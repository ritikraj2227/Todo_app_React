import Todo from "./Todo";

export default function Todos({ todo, onDelete }) {
  return (
    <>
      <div>
        {todo.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
}
