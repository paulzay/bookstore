import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const categories = [
  'Categories',
  'Action',
  'Biography',
  'Horror',
  'History',
  'Kids',
  'Learning',
  'Sci-Fi',
];

export default function CategoryFilter({ changeFilter }) {
  const handleChange = useCallback(event => {
    changeFilter(event.target.value);
  }, [changeFilter]);

  return (
    <div>
      <select className="form-control" onChange={handleChange}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}
CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
