import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from './features/auth/AuthForm';
import LogoutButton from './features/auth/LogoutButton';
import TodoForm from './features/todos/TodoForm';
import TodoList from './features/todos/TodoList';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div>
                  <LogoutButton />
                  <h2>Todo List</h2>
                  <TodoForm />
                  <TodoList />
                </div>
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
          <Route
            path="/auth"
            element={
              isAuthenticated ? <Navigate to="/" /> : <AuthForm />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
