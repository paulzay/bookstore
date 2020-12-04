import BookActionTypes from '../actions/actionTypes';

export default function filter(state = 'All', action) {
  switch (action.type) {
    case BookActionTypes.CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
}
