/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
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
import { playerMakeMove, playerSetConnections } from 'store/actions/game';
import { logMessage } from 'store/actions/log';

import { PIECE_TYPES } from 'constants/pieces';
import { GAME_STAGE } from 'constants/game';

import {
  areCellsConnected,
  getAdjacentSquares,
  getConnectedCells,
  getLegalMoves,
  getPlayerStations,
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
    const { isLegal, errors } = isLegalStationPlacement({ posX, posY, connections }, rows, columns);
    if (!isLegal) {
      errors.map(err => dispatch(logMessage(err)));
      return;
    }

    // const adjacentSquares = getAdjacentSquares(posX, posY, rows, columns, 2);
    // console.log(adjacentSquares);
    // adjacentSquares.map(square => {
    //   dispatch(disablePiece(...square));
    // });
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
  dispatch(checkIsConnectionEstablished());
  dispatch(playerMakeMove());
};

export const checkIsConnectionEstablished = () => (dispatch, getState) => {
  const {
    game: {
      activeTurn: {
        player: { id }
      }
    },
    board: { gameMap }
  } = getState();
  const [fromStation, toStation] = getPlayerStations(gameMap, id);

  const fromStationExits = getConnectedCells(fromStation, gameMap);
  const toStationExits = getConnectedCells(toStation, gameMap);

  if (!fromStationExits.length || !toStationExits.length) return;
  const fromToConnection = fromStationExits
    .map(fromExit =>
      toStationExits
        .map(toExit => areCellsConnected(fromExit, toExit, gameMap))
        .some(conn => conn === true)
    )
    .filter(conn => conn === true).length;

  const toFromConnection = toStationExits
    .map(toExit =>
      fromStationExits
        .map(fromExit => areCellsConnected(toExit, fromExit, gameMap))
        .some(conn => conn === true)
    )
    .filter(conn => conn === true).length;

  const distinctConnections = Math.min(fromToConnection, toFromConnection);

  if (distinctConnections) dispatch(playerSetConnections(id, distinctConnections));

  console.log(`[checkIsConnectionEstablished]: Distinct connections found`, distinctConnections);

  // .filter(connection => connection === true);

  // eslint-disable-next-line no-alert
  // if (connections.length === 2) alert('You have won the game good sir');

  // if (areCellsConnected(station1, station2, gameMap))
  //   dispatch(logMessage('Congratulations, you have established a connection!'));
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
