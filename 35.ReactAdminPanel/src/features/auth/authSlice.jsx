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
      toast.success('Giriş başarılı!');
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      toast.info('Çıkış yapıldı.');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

// Asenkron işlemleri burada gerçekleştireceğiz
export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/users', {
      params: { username: userData.username, password: userData.password }
    });

    if (response.data.length === 0) {
      toast.error('Kullanıcı adı veya şifre yanlış!');
    } else {
      dispatch(loginSuccess(response.data[0])); // İlk kullanıcıyı alıyoruz
    }
  } catch (error) {
    toast.error('Bir hata oluştu!');
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    // Yeni kullanıcıyı JSON Server'a ekliyoruz
    const response = await axios.post('http://localhost:3000/users', userData);
    if (response.status === 201) {
      toast.success('Kayıt başarılı, giriş yapabilirsiniz!');
      dispatch(login(userData)); // Kayıt başarılı olduktan sonra login işlemine yönlendiriyoruz
    }
  } catch (error) {
    toast.error('Bir hata oluştu!');
  }
};
