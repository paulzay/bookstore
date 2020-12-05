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
  const filteredBooks = (filter !== 'Categories') ? books.filter(book => book.category === filter) : books;
  return (
    <>

      <div className="header">
        <h1>Bookstore CMS</h1>
        <h2>BOOKS</h2>
        <CategoryFilter changeFilter={changeFilter} />
      </div>
      <div>
        {
          filteredBooks.map(book => (
            <Book key={book.id} book={book} deleteBook={deleteBook} />
          ))
        }
      </div>
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
