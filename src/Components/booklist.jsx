import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Addbook from './form';
import Book from './bookinfo';
import { fetch } from '../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const { books, isLoading, isError } = useSelector((store) => store.booksList);

  useEffect(() => {
    dispatch(fetch());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Page Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error">
        <h1>Something went wrong...</h1>
      </div>
    );
  }
  return (
    <>
      <ul className="booklist">
        {Object.entries(books).map(([id, book]) => (
          <Book
            key={id}
            id={id}
            title={book[0].title}
            author={book[0].author}
            category={book[0].category}
          />
        ))}
      </ul>
      <Addbook />
    </>
  );
}

export default BookList;
