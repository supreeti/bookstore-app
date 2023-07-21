import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Addbook from './form';
import Book from './bookinfo';

function BookList() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.booksList);
  return (
    <>
      <ul className="booklist">
        {books.map((book) => <Book key={book.item_id} {...book} />)}
      </ul>
      <Addbook />
    </>
  );
}

export default BookList;
