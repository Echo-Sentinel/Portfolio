import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    incrementCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) item.count += 1;
    },
    decrementCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.count > 1) {
        item.count -= 1;
      }
    },
  },
});

export const { addItem, removeItem, incrementCount, decrementCount } =
  basketSlice.actions;
export default basketSlice.reducer;
