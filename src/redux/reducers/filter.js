import BookActionTypes from '../actions/actionTypes';

export default function filter(state = 'Categories', action) {
  switch (action.type) {
    case BookActionTypes.CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
}
