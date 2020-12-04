import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../../components/Book/Book';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import { changeFilter } from '../../redux/actions/index';
import './booklist.css';

function BookList({
  books, deleteBook, filter, changeFilter,
}) {
  const filteredBooks = (filter !== 'All') ? books.filter(book => book.category === filter) : books;
  return (
    <>
      <div>
        <CategoryFilter changeFilter={changeFilter} />
      </div>
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
          filteredBooks.map(book => (
            <Book key={book.id} book={book} deleteBook={deleteBook} />
          ))
        }
        </tbody>
      </table>
    </>

  );
}

BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: id => {
    dispatch({ id, type: 'REMOVE_BOOK' });
  },
  changeFilter: category => {
    dispatch(changeFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
