import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => {
  const {
    id, title, author, category,
  } = book;

  return (
    <div className="bookstoredata">
      <section>
        <span>{category}</span>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button type="submit">Comments</button>
        <button type="submit" data-index={id} onClick={() => onDelete(id)}>Remove</button>
        <button type="submit">Edit</button>
      </section>
      <section>
        <div className="bookinfo" />
        <article className="percentages">
          <span>Complete</span>
        </article>
      </section>
      <section className="progress">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 3</span>
        <button type="submit">UPDATE PROGRESS</button>
      </section>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
