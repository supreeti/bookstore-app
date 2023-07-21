import React from 'react';
import { useSelector } from 'react-redux';
import Addbook from './form';
import Book from './bookinfo';

function BookList() {
  const { books } = useSelector((store) => store.booksList);
  return (
    <>
      <ul className="booklist">
        {books.map((book) => <Book key={book.item_id} book={book} />)}
      </ul>
      <Addbook />
    </>
  );
}

export default BookList;
