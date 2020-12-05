import React from 'react';
import PropTypes from 'prop-types';
import './book.css';

function Book({
  book, deleteBook,
}) {
  return (
    <div className="book" key={book.id}>
      <div className="rw1">
        <p />
        <h3>{book.category}</h3>
        <h2>{book.title}</h2>
        <p>Author Name</p>
        <div className="more">
          <button className="submit" type="submit">Comments</button>
          <button
            className="submit"
            type="submit"
            onClick={() => { deleteBook(book.id); }}
          >
            Delete Book
          </button>
          <button className="submit" type="submit">Edit</button>
        </div>
      </div>
      <div className="rw2">
        <div className="progress-bar" />
        <div className="cent">
          <h2>64%</h2>
          <p>Completed</p>
        </div>
      </div>
      <div className="rw3">
        <p>CURRENT CHAPTER</p>
        <h2>Chapter 17</h2>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </div>

  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
