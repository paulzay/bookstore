import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../../components/Book/Book';
import './booklist.css';

function BookList({ books }) {
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
            <Book key={book.id} book={book} />
          ))
        }
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};
export default connect(mapStateToProps, null)(BookList);
