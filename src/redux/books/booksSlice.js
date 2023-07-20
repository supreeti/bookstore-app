import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const newBook = action.payload;
      state.push(newBook);
    },
    remove: (state, action) => {
      const bookId = action.payload;
      state.filter((book) => book !== bookId);
    },
  },
});

export default bookSlice.reducer;
export const { remove, add } = bookSlice.actions;
