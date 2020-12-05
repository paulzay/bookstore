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
    e.target.reset();
  };

  return (
    <div className="bookform">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Book title" />
        <select onChange={e => setCategory(e.target.value)}>
          <option value="" hidden="hidden">Categories</option>
          {
                categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))
              }
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
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
