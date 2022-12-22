import { FaTrash } from 'react-icons/fa'

export default function Todo({ todo, onDelete }) {
  return (
    <div className="item">
      {/* <p className="complete" ></p> */}
      <p className='task'>{todo.text}</p>
      <p className="close"><FaTrash onClick={ () => onDelete(todo.id) }/></p>
    </div>
  )
}
