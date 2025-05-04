import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from './todoSlice';

export default function EditModal({ todo, onClose }) {
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(updateTodo({ id: todo.id, newText }));
      onClose();
    }
  };

  return (
    <div style={{ background: '#ddd', padding: 20 }}>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={handleSave}>Yadda saxla</button>
      <button onClick={onClose}>Bagla</button>
    </div>
  );
}
