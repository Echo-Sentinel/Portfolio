import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from './todoSlice';
import EditModal from './EditModal';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => setIsEditing(true)}>Redakte et</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Sil</button>

      {isEditing && (
        <EditModal
          todo={todo}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}
