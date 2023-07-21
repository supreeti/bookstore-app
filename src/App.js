import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Components/navigation';
import BookList from './Components/booklist';
import Category from './Components/categories';

function App() {
  return (
    <>
      <Navigation />
      <div className="bookstore">
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Category />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
