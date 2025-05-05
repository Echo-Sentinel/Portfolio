import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from './todoSlice';  // Bu action'ı oluşturacağız
import TodoItem from './TodoItem';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    // Backend'den todo verilerini çek
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todos');
        dispatch(loadTodos(response.data));
      } catch (error) {
        console.error('Todo listesi alınırken bir hata oluştu', error);
      }
    };

    fetchTodos();
  }, [dispatch]);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
