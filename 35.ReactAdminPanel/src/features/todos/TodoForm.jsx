import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function TodoForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    try {
      // Backend'e yeni todo ekleme isteği
      const response = await axios.post('http://localhost:3000/todos', { text });

      // Redux store'a ekle
      dispatch(addTodo(response.data));
      setText('');
      toast.success('Todo başarıyla eklendi!');
    } catch (error) {
      toast.error('Todo eklenirken bir hata oluştu!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Yeni todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ekle</button>
    </form>
  );
}
