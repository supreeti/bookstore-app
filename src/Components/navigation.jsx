import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { User } from '../icons';

const Navigation = () => (
  <header>
    <div className="nav">
      <h1>Bookstore CMS</h1>
      <ul className="nav-menu">
        <li><NavLink to="/">BOOKS</NavLink></li>
        <li><NavLink to="/categories">CATEGORIES</NavLink></li>
      </ul>
      <User />
    </div>
  </header>
);

export default Navigation;
