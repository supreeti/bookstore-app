import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SERz0T6MOlfncfi0umcc/books';
const initialState = {
  books: [],
  isLoading: false,
  isError: false,
};

export const fetch = createAsyncThunk('books/fetchBooks', async (thunkAPI) => {
  try {
    const bookApi = await axios.get(url);
    return bookApi.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('try again');
  }
});

export const addBooks = createAsyncThunk('books/addBook', async (payload, thunkAPI) => {
  try {
    const addBookApi = await axios.post(url, payload);
    thunkAPI.dispatch(fetch());
    return addBookApi.payload;
  } catch (error) {
    return thunkAPI.rejectWithValue('try again');
  }
});

export const deleteBooks = createAsyncThunk('books/removeBook', async (id, thunkAPI) => {
  try {
    const delBookApi = await axios.delete(`${url}/${id}`);
    thunkAPI.dispatch(fetch());
    return delBookApi.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(' try later');
  }
});
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetch.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
  },
});
export default bookSlice.reducer;
