import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from './todoSlice';  
import TodoItem from './TodoItem';

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/todos');
        dispatch(loadTodos(response.data));
      } catch (error) {
        console.error('Todo listi alinarken bir xeta yarandi', error);
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
