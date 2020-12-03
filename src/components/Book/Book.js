import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './book.css';

function Book({
  book, deleteBook,
}) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="submit" onClick={() => { deleteBook(book.id); }}>Delete Book</button></td>
    </tr>
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

const mapDispatchToProps = dispatch => ({
  deleteBook: id => {
    dispatch({ id, type: 'REMOVE_BOOK' });
  },
});
export default connect(null, mapDispatchToProps)(Book);
