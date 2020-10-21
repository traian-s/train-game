import {
  SET_BOARD,
  SET_ROWS,
  SET_COLUMNS,
  SET_PIECE,
  SET_LEGAL_MOVES,
  ENABLE_PIECE,
  DISABLE_PIECE,
  ENABLE_ALL_PIECES
} from 'store/types/board';
import { playerMakeMove } from 'store/actions/game';
import { logMessage } from 'store/actions/log';

import { PIECE_TYPES } from 'constants/pieces';
import { GAME_STAGE } from 'constants/game';

import {
  getAdjacentSquares,
  getLegalMoves,
  isLegalStationPlacement,
  isLegalTrackPlacement,
  rotateConnections
} from 'utils/gameHelpers';

export const setRows = rows => ({ type: SET_ROWS, payload: rows });
export const setColumns = columns => ({ type: SET_COLUMNS, payload: columns });
export const setBoard = matrix => ({ type: SET_BOARD, payload: matrix });
export const setLegalMoves = moves => ({ type: SET_LEGAL_MOVES, payload: { moves } });
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
    ownerId: null,
    type: '',
    rotation: 0,
    connections: []
  };

  const matrix = Array(rows)
    .fill(null)
    .map((_, posX) =>
      Array(columns)
        .fill(null)
        .map((_, posY) => ({ ...defaultPiece, posX, posY }))
    );

  // const matrix = new Array(rows)
  //   .fill(0)
  //   .map((, posX) => new Array(columns).fill({ ...defaultPiece, posX: rows, posY: columns }));
  dispatch(setBoard(matrix));
};

export const setPiece = (posX, posY, type, rotation) => (dispatch, getState) => {
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
        [posX]: {
          [posY]: { type: currentType, rotation: currentRotation }
        }
      },
      gameMap
    }
  } = getState();

  if (type === currentType && rotation === currentRotation) {
    dispatch(logMessage(`No change registered.`));
    return;
  }

  const connections = rotateConnections(PIECE_TYPES[type].connections, rotation);

  if (currentStage === GAME_STAGE.STATIONS.type) {
    const { isLegal, errors } = isLegalStationPlacement(posX, posY, rows, columns, connections);
    if (!isLegal) {
      errors.map(err => dispatch(logMessage(err)));
      return;
    }

    const adjacentSquares = getAdjacentSquares(posX, posY, rows, columns, 2);
    console.log(adjacentSquares);
    adjacentSquares.map(square => {
      dispatch(disablePiece(...square));
    });
  }

  if (currentStage === GAME_STAGE.TRACKS.type) {
    // We need to do something here...

    const isLegal = isLegalTrackPlacement({ posX, posY, connections }, gameMap);
    if (!isLegal) {
      dispatch(logMessage(`Move is not legal.`));
      return;
    }
  }

  const piece = {
    connections,
    enabled: true,
    occupied: true,
    ownerId: id,
    posX,
    posY,
    type,
    rotation
  };
  dispatch(savePiece(posX, posY, piece));
  dispatch(playerMakeMove());
};

export const showLegalMoves = () => (dispatch, getState) => {
  const {
    board: { gameMap },
    game: {
      activeTurn: {
        player: { id }
      },
      turns: {
        stage: { type: stageType }
      }
    }
  } = getState();

  if (stageType !== GAME_STAGE.TRACKS.type) return;

  const legalMoves = getLegalMoves(gameMap, id);
  const parsedMoves = legalMoves.map(el => el.join());
  if (parsedMoves.length) dispatch(setLegalMoves(parsedMoves));
};
