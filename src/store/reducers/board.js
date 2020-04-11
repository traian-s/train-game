import { SET_BOARD, SET_COLUMNS, SET_ROWS } from 'store/types/board';

export const initialState = {
  config: {
    rows: 8,
    columns: 8
  },
  map: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return { ...state, map: action.payload };

    case SET_ROWS:
      return { ...state, config: { ...state.config, rows: action.payload } };

    case SET_COLUMNS:
      return { ...state, config: { ...state.config, columns: action.payload } };

    default:
      return state;
  }
};
