import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../../components/Book/Book';
import { deleteBook } from '../../redux/actions/index';
import './booklist.css';

function BookList({ books, deleteBook }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book key={book.id} book={book} deleteBook={deleteBook} />
          ))
        }
      </tbody>
    </table>
  );
}

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: id => {
    dispatch(deleteBook(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
