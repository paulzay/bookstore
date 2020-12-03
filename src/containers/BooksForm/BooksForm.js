import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './bookform.css';

function BooksForm({ createBook }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && category) {
      createBook({
        id: Math.floor(Math.random() * 100),
        title,
        category,
      });
    }
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <strong>Select Category:</strong>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="action">Action</option>
          <option value="biography">Biography</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="kids">Kids</option>
          <option value="learning">Learning</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>
        <button type="submit">Create Book</button>
      </form>
    </>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch({
      id: book.id,
      type: 'CREATE_BOOK',
      title: book.title,
      category: book.category,
    });
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
