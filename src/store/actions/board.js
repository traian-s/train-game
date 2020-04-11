import { SET_BOARD, SET_ROWS, SET_COLUMNS } from 'store/types/board';

export const setRows = rows => ({ type: SET_ROWS, payload: rows });
export const setColumns = columns => ({ type: SET_COLUMNS, payload: columns });
export const setBoard = matrix => ({ type: SET_BOARD, payload: matrix });

export const initBoard = () => (dispatch, getState) => {
  const {
    board: {
      config: { rows, columns }
    }
  } = getState();

  const matrix = new Array(rows).fill(0).map(() => new Array(columns).fill({ occupied: false }));
  dispatch(setBoard(matrix));
};
