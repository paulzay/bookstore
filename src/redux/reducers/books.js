import BookActionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function books(state = initialState.books, action) {
  switch (action.type) {
    case BookActionTypes.CREATE_BOOK:
      return [...state, { ...action.book }];
    case BookActionTypes.REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
}
