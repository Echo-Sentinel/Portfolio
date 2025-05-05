import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Wishlist'teki ürünlerin listesi
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Wishlist'te zaten varsa, eklemeyelim
      const existingProduct = state.items.find((item) => item.id === action.payload.id);
      if (!existingProduct) {
        state.items.push(action.payload); // Yeni ürünü ekliyoruz
      }
    },
    removeItem: (state, action) => {
      // Wishlist'ten ürün silmek
      state.items = state.items.filter((item) => item.id !== action.payload.id); // Ürünü listeden çıkarıyoruz
    },
  },
});

export const { addItem, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
