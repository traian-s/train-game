import { SET_ROWS, SET_COLUMNS } from 'store/types/ui';

export const initialState = {
  board: {
    rows: 8,
    columns: 8
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ROWS:
      return { ...state, board: { ...state.board, rows: action.payload } };

    case SET_COLUMNS:
      return { ...state, board: { ...state.board, columns: action.payload } };

    default:
      return state;
  }
};
