import React, { useState } from 'react';
import Addbook from './form';
import BookList from './booklist';

const Main = () => {
  const [books, setBooks] = useState([
    {
      id: 1, title: 'The Hunger Games', author: 'Suzanne Collins', category: 'Action', percentage: '64%',
    },
    {
      id: 2, title: 'Dune', author: 'Frank Herbert', category: 'Science Fiction', percentage: '8%',
    },
    {
      id: 3, title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins', category: 'Economy', percentage: '0%',
    },
  ]);

  const handleDeleteAction = (id) => {
    const List = books.filter((book) => book.id !== id);
    setBooks(List);
  };

  return (
    <div className="main">
      <BookList books={books} setBooks={setBooks} onDelete={handleDeleteAction} />
      <Addbook books={books} setBooks={setBooks} />
    </div>
  );
};

export default Main;
