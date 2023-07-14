import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Main from './components/main';
import Category from './components/categories';

function App() {
  return (
    <div className="bookstore">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
