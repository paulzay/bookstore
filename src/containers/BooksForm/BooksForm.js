import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './bookform.css';

function BooksForm({ createBook }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const categories = [
    'Action',
    'Biography',
    'Horror',
    'History',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
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
    setCategory('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <strong>Select Category:</strong>
        <select onChange={e => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          {
                categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))
              }
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
