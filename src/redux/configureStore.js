import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const Store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default Store;
