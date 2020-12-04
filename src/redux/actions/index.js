import BookActionTypes from './actionTypes';

export const createBook = book => ({
  type: BookActionTypes.CREATE_BOOK,
  payload: book,
});

export const deleteBook = book => ({
  type: BookActionTypes.REMOVE_BOOK,
  payload: book,
});

export const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});
