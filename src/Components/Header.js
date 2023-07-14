import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div className="linkCont">
        <h1>
          BookstoreCMS
        </h1>
        <NavLink to="/">BOOKS</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </div>
    </nav>
  );
}

export default Header;
