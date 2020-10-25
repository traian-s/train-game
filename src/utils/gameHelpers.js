/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
// export const isMatch = (pieceA, pieceB) => {};
import { DIRECTIONS, PIECE_TYPES } from 'constants/pieces';

const fakeBoard = [
  [
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    }
  ],
  [
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      connections: [1, 1, 0, 1],
      enabled: true,
      ownerId: 2,
      type: 'station',
      rotation: 0
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      connections: [0, 1, 1, 1],
      enabled: true,
      ownerId: 1,
      type: 'station',
      rotation: -180
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    }
  ],
  [
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    }
  ],
  [
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    }
  ],
  [
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    }
  ],
  [
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    }
  ],
  [
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      connections: [1, 1, 0, 1],
      enabled: true,
      ownerId: 2,
      type: 'station',
      rotation: 0
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      connections: [1, 1, 0, 1],
      enabled: true,
      ownerId: 1,
      type: 'station',
      rotation: 0
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    }
  ],
  [
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    },
    {
      enabled: true,
      occupied: false,
      type: '',
      rotation: 0,
      connections: [],
      ownerId: null
    }
  ]
];

export const rotateConnections = (connections, rotation) => {
  const connectionsCopy = [...connections];
  const reverse = rotation < 0;
  const times = Math.abs(rotation / 90);
  for (let i = 0; i < times; i++) {
    if (reverse) connectionsCopy.push(connectionsCopy.shift());
    else connectionsCopy.unshift(connectionsCopy.pop());
  }
  return connectionsCopy;
};

/**
 * Checks if provided cell belongs to the game map
 *
 * @param {object} cell a cell object
 * @param {object} gameMap a game map object
 *
 * @returns {boolean} True if cell is on the game map
 */
export const isOnMap = ({ posX, posY }, gameMap) => {
  return typeof gameMap[posX] !== 'undefined' && typeof gameMap[posX][posY] !== 'undefined';
};

export const getAdjacentSquares = (posX, posY, rows, columns, padCount) => {
  const adjacentSquares = [];
  for (let i = posX - padCount; i <= posX + padCount; i++) {
    for (let j = posY - padCount; j <= posY + padCount; j++) {
      if (i >= 0 && i < rows && j >= 0 && j < columns) adjacentSquares.push([i, j]);
    }
  }
  return adjacentSquares;
};

/**
 * Given a cell and a game map returns an array of [x, y] coordinates representing
 * cells that can be reached from the provided cell that are also on the map.
 * If connections is not provided it will assume it can connect to all cells.
 *
 * @param {number} posX X position of cell
 * @param {number} posY Y position of cell
 * @param {array} gameMap
 *
 * @returns {array} Returns array of legal directions
 */
export const getAdjacentDirections = ({ posX, posY, connections = [1, 1, 1, 1] }, gameMap) => {
  if (!isOnMap({ posX, posY }, gameMap)) return null;
  return [
    [posX - 1, posY],
    [posX, posY + 1],
    [posX + 1, posY],
    [posX, posY - 1]
  ]
    .filter((_, idx) => connections[idx] === 1)
    .filter(([posX, posY]) => isOnMap({ posX, posY }, gameMap));
};

/**
 * Takes the result of getAdjacentDirections and returns actual cells
 *
 * @param {object} cell a cell object
 * @param {object} gameMap a gameMap object
 *
 * @returns {array} An array of cells or empty array
 */
export const getAdjacentCells = ({ posX, posY, connections = [1, 1, 1, 1] }, gameMap) => {
  const directions = getAdjacentDirections({ posX, posY, connections }, gameMap);
  return directions.map(([x, y]) => gameMap[x][y]) || [];
};

/**
 * Given a cell and a game map returns all adjacent cells
 * that the current cell is connected to: it must have a connection
 * to that cell && that cell must have a connection back to it
 *
 * @param {object} cell a cell object
 * @param {object} gameMap a game map object
 *
 * @returns {array} an array of cells or empty
 */
export const getConnectedCells = ({ posX, posY, connections } = {}, gameMap) => {
  console.log(`Called with ${posX} ${posY}`);
  if (!posX || !posY) return [];
  const adjacentCells = getAdjacentCells({ posX, posY }, gameMap);
  return adjacentCells
    .filter(cell => cell.occupied === true)
    .filter(cell => isLegalConnection({ posX, posY, connections }, cell, true));
  // console.log(`[getConnectedCells]: `, connectedCells);
};

export const getLegalMoves = (gameMap, player) => {
  // console.log(`getLegalMoves called with ${gameMap} ${player}`);
  gameMap = gameMap || fakeBoard;
  let legalMoves = [];
  if (!gameMap.length || !player) return;
  gameMap.map(column => {
    column.map(cell => {
      if (cell.ownerId === player) {
        legalMoves = [...legalMoves, ...getAdjacentDirections(cell, gameMap)];
      }
    });
  });

  return legalMoves;
};

/**
 * Provided a gameMap and a player ID
 * Will return the two cells representing the players stations
 *
 * @param {object} gameMap a game map object
 * @param {number} player  a player id
 *
 * @returns {array} an array of cells
 */
export const getPlayerStations = (gameMap, player) => {
  return gameMap.reduce((acc, curr) => {
    const station = curr.filter(
      cell => cell.ownerId === player && cell.type === PIECE_TYPES.station.type
    );
    return station.length ? [...acc, ...station] : acc;
  }, []);
};

export const isCellOccupied = ({ occupied }) => occupied !== false;

/**
 * Given two adjacent cells it verifies their position in relation to eachother
 * and returns true if a connection is satisfied between them: both must have either no connection
 * to eachother OR they must both have a connection to eachother
 * If provided with forceConnection flag then it will only return true
 * if both have connection to eachother
 *
 * @param {object} fromCell a from cell object
 * @param {object} toCell a to cell object
 * @param {*} forceConnection
 */
export const isLegalConnection = (
  { posX: fromX, posY: fromY, connections: fromConnections },
  { posX: toX, posY: toY, connections: toConnections },
  forceConnection = false
) => {
  const direction = `${fromX - toX}${fromY - toY}`;
  switch (direction) {
    case '10': {
      // Piece 1 is south of piece 2
      return forceConnection
        ? fromConnections[0] && toConnections[2]
        : fromConnections[0] === toConnections[2];
    }
    case '0-1': {
      // Piece 1 is west of piece 2
      return forceConnection
        ? fromConnections[1] && toConnections[3]
        : fromConnections[1] === toConnections[3];
    }
    case '-10': {
      // Piece 1 is north of piece 2
      return forceConnection
        ? fromConnections[2] && toConnections[0]
        : fromConnections[2] === toConnections[0];
    }
    case '01': {
      // Piece 1 is east of piece 2
      return forceConnection
        ? fromConnections[3] && toConnections[1]
        : fromConnections[3] === toConnections[1];
    }
    default:
      return false;
  }
};

export const isLegalStationPlacement = ({ posX, posY, connections }, rows, columns) => {
  let isLegal = true;
  const errors = [];

  const possibleConnections = [
    [posX - 1, posY],
    [posX, posY + 1],
    [posX + 1, posY],
    [posX, posY - 1]
  ].reduce((acc, val) => {
    const [x, y] = val;
    return [...acc, +(0 <= x && x < rows && 0 <= y && y < columns)];
  }, []);

  connections.map((val, idx) => {
    if (val === 1 && possibleConnections[idx] !== 1) {
      errors.push(`Illegal Station Placement. ${DIRECTIONS[idx]} direction is blocked.`);
      isLegal = false;
    }
  });

  return { isLegal, errors };
};

export const isLegalTrackPlacement = ({ posX, posY, connections }, gameMap) => {
  // Must connect all adjacent tracks if any
  // Must connect at least two squares that are on the game map

  const adjacentCells = getAdjacentCells({ posX, posY }, gameMap);

  // Map over all adjacent cells
  // For occupied ones check if they have a connection into the current cell
  // Then that connection must be satisfied by the current cell
  const connectionLegal = adjacentCells
    .filter(cell => cell.occupied)
    .map(cell => isLegalConnection({ posX, posY, connections }, cell))
    .every(legal => legal === true);

  // Check if at least 2 of the connections are on the map
  // A piece that directs only outside the map is not legal
  const connectedCells = getAdjacentCells({ posX, posY, connections }, gameMap);
  return connectionLegal && connectedCells.length >= 2;
};

/**
 * Given a fromCell, a toCell and a gameMap returns true if there is a
 * path between fromCell and toCell
 *
 * @param {object} fromCell A cell object
 * @param {object} toCell A cell object
 * @param {object} gameMap A game map object
 * @param {object} previousCell A cell object
 *
 * @returns {bool} Whether the cells are connected or not
 */
export const areCellsConnected = (fromCell, toCell, gameMap, previousCell = {}) => {
  console.log(`[areCellsConnected] called with:`, fromCell, toCell, gameMap);
  if (!fromCell || !toCell || !gameMap) return false;

  // Don't pass through a station to determine a connection; avoids breaking loops
  if (fromCell.type === PIECE_TYPES.station.type) return false;

  if (fromCell?.posX === toCell?.posX && fromCell?.posY === toCell?.posY) {
    // We have reached the end of the connection
    return true;
  }

  const connectedCells = getConnectedCells(fromCell, gameMap);
  if (!connectedCells.length) return false; // We have reached the end of this path and there is no connection

  console.log(`[areCellsConnected]: previous cell is ${previousCell.posX} ${previousCell.posY}`);
  console.log(
    `[areCellsConnected] filtering out previous cells leaves:`,
    connectedCells.filter(
      cell => cell.posX !== previousCell.posX && cell.posY !== previousCell.posY
    )
  );

  return connectedCells
    .filter(cell => cell.posX !== previousCell.posX || cell.posY !== previousCell.posY)
    .map(cell => areCellsConnected(cell, toCell, gameMap, fromCell))
    .some(connection => connection === true);
};
