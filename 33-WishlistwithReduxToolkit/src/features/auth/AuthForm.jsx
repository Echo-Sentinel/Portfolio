import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, register } from './authSlice';

export default function AuthForm() {
  const [formData, setFormData] = useState({ username: '', password: '', isLogin: true });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username: formData.username, password: formData.password };
    if (formData.isLogin) {
      dispatch(login(userData));
    } else {
      dispatch(register(userData));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formData.isLogin ? 'Login' : 'Register'}</h2>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <button type="submit">{formData.isLogin ? 'Login' : 'Register'}</button>
      <p onClick={() => setFormData({ ...formData, isLogin: !formData.isLogin })}>
        {formData.isLogin ? 'Don’t have an account? Register here' : 'Already have an account? Login'}
      </p>
    </form>
  );
}
