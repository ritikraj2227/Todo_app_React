import Todo from "./Todo";

export default function Todos({ todo, onDelete }) {
  return (
    <>
      <div>
        {todo.map((todo, index) => (
          <Todo key={ index } todo={todo} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
}
