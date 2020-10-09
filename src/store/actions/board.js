import { SET_BOARD, SET_ROWS, SET_COLUMNS, SET_PIECE } from 'store/types/board';
import { PIECE_TYPES } from 'constants/pieces';
import { rotateConnections } from 'utils/gameHelpers';

export const setRows = rows => ({ type: SET_ROWS, payload: rows });
export const setColumns = columns => ({ type: SET_COLUMNS, payload: columns });
export const setBoard = matrix => ({ type: SET_BOARD, payload: matrix });

export const initBoard = () => (dispatch, getState) => {
  const {
    board: {
      config: { rows, columns }
    }
  } = getState();

  const defaultPiece = {
    occupied: false,
    type: '',
    rotation: 0
  };

  const matrix = new Array(rows).fill(0).map(() => new Array(columns).fill({ ...defaultPiece }));
  dispatch(setBoard(matrix));
};

export const savePiece = (x, y, piece) => ({ type: SET_PIECE, payload: { x, y, piece } });

export const setPiece = (x, y, type, rotation) => dispatch => {
  console.log(type);
  const connections = rotateConnections(PIECE_TYPES[type].connections, rotation);
  const piece = {
    type,
    rotation,
    connections
  };
  dispatch(savePiece(x, y, piece));
};
