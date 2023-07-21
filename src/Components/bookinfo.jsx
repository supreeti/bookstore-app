import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooks } from '../redux/books/booksSlice';
import Button from './button';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <div className="bookstoredata">
      <section>
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{author}</p>
        <button type="button">Comments</button>
        <Button
          type="button"
          onClick={() => dispatch(deleteBooks(id))}
          btval="Remove"
          btnm="remove"
        />
        <button type="button">Edit</button>
      </section>
      <section className="bookinfo">
        <article className="percentages">
          <span>Complete</span>
        </article>
      </section>
      <section className="progress">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 3</span>
        <button type="button">UPDATE PROGRESS</button>
      </section>
    </div>
  );
}
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
