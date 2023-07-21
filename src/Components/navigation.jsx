import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../App.css';

const Navigation = () => (
  <div className="nav">
    <h1>Bookstore CMS</h1>
    <ul>
      <li><NavLink to="/">BOOKS</NavLink></li>
      <li><NavLink to="/categories">CATEGORIES</NavLink></li>
    </ul>
    <Outlet />
  </div>
);

export default Navigation;
