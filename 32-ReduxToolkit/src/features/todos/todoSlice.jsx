import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      toast.success('Todo elave olundu!');
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = newText;
        toast.info('Todo yenilendi.');
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      toast.error('Todo silindi.');
    },
    deleteAllTodos: (state) => {
      state.todos = [];
      toast.error('Butun todolar silindi.');
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, deleteAllTodos } = todoSlice.actions;
export default todoSlice.reducer;

