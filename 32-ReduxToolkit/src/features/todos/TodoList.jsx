import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteAllTodos } from './todoSlice';

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      {todos.length > 0 && (
        <button onClick={() => dispatch(deleteAllTodos())}>
          Butun todolari sil
        </button>
      )}
    </div>
  );
}
