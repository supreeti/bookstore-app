import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/main';
import Navigation from './Components/navigation';
import Category from './Components/categories';

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
