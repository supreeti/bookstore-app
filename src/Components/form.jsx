import React from 'react';
import '../App.css';

const Addbook = () => (
  <section>
    <span>ADD NEW BOOK</span>
    <form>
      <input type="text" required placeholder="Book Title" />
      <input type="search" required placeholder="Category" />
      <button type="button">ADD BOOK</button>
    </form>
  </section>
);

export default Addbook;
