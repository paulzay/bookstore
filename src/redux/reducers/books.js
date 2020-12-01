import BookActionTypes from '../actions/actionTypes';

const INITIAL_STATE = [
  {
    id: Math.floor(Math.random() * 100),
    title: 'Divergent',
    category: 'Horror',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Star Wars',
    category: 'Sci-Fi',
  },
];

export default function bookReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BookActionTypes.CREATE_BOOK:
      return [...state, { ...action.book }];
    case BookActionTypes.REMOVE_BOOK:
      return [...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)];
    default:
      return state;
  }
}
