import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBooks } from '../redux/books/booksSlice';
import Button from './button';
import '../App.css';

function Addbook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const onTitleChange = (e) => setTitle(e.target.value);
  const onAuthorChange = (e) => setAuthor(e.target.value);

  const save = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(addBooks({
        item_id: nanoid(),
        title,
        author,
        category,
      }));
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <div className="main">
      <h2 className="form-tittle">ADD NEW BOOK</h2>
      <form>
        <input
          type="text"
          id="input-tittle"
          placeholder="Book Title"
          value={title}
          onChange={onTitleChange}
        />
        <input
          type="text"
          id="input-author"
          placeholder="Author"
          value={author}
          onChange={onAuthorChange}
        />
        <select
          className="form-select"
          id="select-btn"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="empty">select category</option>
          <option value="Action">Action</option>
          <option value="Science fiction">Science fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <Button type="submit" onClick={save} btnm="Add-btn" btval="Add Book" />
      </form>
    </div>
  );
}

export default Addbook;
