import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
      toast.success('Giris alindi');
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      toast.info('Cixis olundu.');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/users', {
      params: { username: userData.username, password: userData.password }
    });

    if (response.data.length === 0) {
      toast.error('User adi ve ya sifre yanlisdir!');
    } else {
      dispatch(loginSuccess(response.data[0])); 
    }
  } catch (error) {
    toast.error('Bir hata yarandi');
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/users', userData);
    if (response.status === 201) {
      toast.success('Registrasiya alindi, log in alindi');
      dispatch(login(userData)); 
    }
  } catch (error) {
    toast.error('Bir hata yarandi!');
  }
};
