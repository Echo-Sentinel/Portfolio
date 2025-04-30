import { useDispatch } from 'react-redux';
import { logout } from './authSlice';

export default function LogoutButton() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(logout())}>Logout</button>;
}
