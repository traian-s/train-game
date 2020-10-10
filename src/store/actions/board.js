import {
  SET_BOARD,
  SET_ROWS,
  SET_COLUMNS,
  SET_PIECE,
  ENABLE_PIECE,
  DISABLE_PIECE,
  ENABLE_ALL_PIECES
} from 'store/types/board';
import { playerMakeMove } from 'store/actions/game';

import { PIECE_TYPES } from 'constants/pieces';
import { GAME_STAGE } from 'constants/game';

import { getAdjacentSquares, rotateConnections } from 'utils/gameHelpers';

export const setRows = rows => ({ type: SET_ROWS, payload: rows });
export const setColumns = columns => ({ type: SET_COLUMNS, payload: columns });
export const setBoard = matrix => ({ type: SET_BOARD, payload: matrix });
export const savePiece = (x, y, piece) => ({ type: SET_PIECE, payload: { x, y, piece } });
export const enableAllPieces = () => ({ type: ENABLE_ALL_PIECES });
export const enablePiece = (x, y) => ({ type: ENABLE_PIECE, payload: { x, y } });
export const disablePiece = (x, y) => ({ type: DISABLE_PIECE, payload: { x, y } });

export const initBoard = () => (dispatch, getState) => {
  const {
    board: {
      config: { rows, columns }
    }
  } = getState();

  const defaultPiece = {
    enabled: true,
    occupied: false,
    type: '',
    rotation: 0,
    connections: [],
    ownerId: null
  };

  const matrix = new Array(rows).fill(0).map(() => new Array(columns).fill({ ...defaultPiece }));
  dispatch(setBoard(matrix));
};

export const setPiece = (x, y, type, rotation) => (dispatch, getState) => {
  const {
    game: {
      activeTurn: {
        player: { id }
      },
      turns: {
        stage: { type: currentStage }
      }
    },
    board: {
      config: { rows, columns },
      gameMap: {
        [x]: {
          [y]: { type: currentType, rotation: currentRotation }
        }
      }
    }
  } = getState();

  if (type === currentType && rotation === currentRotation) {
    console.log(`No change registered. Not doing move.`);
    return;
  }

  if (currentStage === GAME_STAGE.STATIONS.type) {
    // console.log(currentStage);
    const adjacentSquares = getAdjacentSquares(x, y, rows, columns, 2);
    console.log(adjacentSquares);
    adjacentSquares.map(square => {
      dispatch(disablePiece(...square));
    });
  }

  const connections = rotateConnections(PIECE_TYPES[type].connections, rotation);
  const piece = {
    connections,
    enabled: true,
    ownerId: id,
    type,
    rotation
  };
  dispatch(savePiece(x, y, piece));
  dispatch(playerMakeMove());
};
