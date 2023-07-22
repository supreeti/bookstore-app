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
      <section className="book">
        <span className="cate">{category}</span>
        <h3>{title}</h3>
        <p className="author">{author}</p>
        <div className="buttons">
          <Button btnm="comments-btn" btval="Comments" />
          <div className="separate" />
          <Button
            type="button"
            onClick={() => dispatch(deleteBooks(id))}
            btval="Remove"
            btnm="remove"
          />
          <div className="separate" />
          <Button btnm="edit-btn" btval="Edit" />
        </div>
      </section>
      <section className="bookinfo">
        <div className="oval" />
        <article className="percentages">
          <h2>64%</h2>
          <span>Completed</span>
        </article>
      </section>
      <section className="progress">
        <div className="line" />
        <div className="column-chapter">
          <h5>CURRENT CHAPTER</h5>
          <p>Chapter 3</p>
          <Button btnm="update-btn" btval="UPDATE PROGRESS" />
        </div>
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
