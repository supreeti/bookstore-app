import { configureStore } from '@reduxjs/toolkit';
import booksreducer from './books/booksSlice';
import categoryreducer from './categories/categoriesSlice';

const Store = configureStore({
  reducer: {
    booksList: booksreducer,
    category: categoryreducer,

  },
});

export default Store;
