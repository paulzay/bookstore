import React from 'react';
// import PropTypes from 'prop-types';
import Select from 'react-select';
import './bookform.css';

const options = [
  { value: 'action', label: 'Action' },
  { value: 'biography', label: 'Biography' },
  { value: 'history', label: 'History' },
  { value: 'horror', label: 'Horror' },
  { value: 'kids', label: 'Kids' },
  { value: 'learning', label: 'Learning' },
  { value: 'sci-fi', label: 'Sci-FI' },
];

function BooksForm() {
  return (
    <>
      <form>
        <label htmlFor="title">
          Title
          <input type="text" id="title" name="title" />
        </label>
        <Select options={options} />
        <button type="submit">Create Book</button>
      </form>
    </>
  );
}

// BooksForm.propTypes = {
//   book: PropTypes.object.isRequired,
// };

export default BooksForm;
