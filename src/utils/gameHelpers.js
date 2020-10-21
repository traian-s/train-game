/* eslint-disable no-debugger */
// export const isMatch = (pieceA, pieceB) => {};
import { DIRECTIONS } from 'constants/pieces';

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
 * Given a cell and a game map will return all adjacent cells that are on the map
 * If connections is provided then it will only return the cells that
 * can be reached considering connections. Otherwise returns all cells
 * regardless of connection
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

export const isCellOccupied = ({ occupied }) => occupied !== false;

export const isLegalConnection = (
  { posX: fromX, posY: fromY, connections: fromConnections },
  { posX: toX, posY: toY, connections: toConnections }
) => {
  const direction = `${fromX - toX}${fromY - toY}`;
  switch (direction) {
    case '10': {
      // Piece 1 is south of piece 2
      return fromConnections[0] === toConnections[2];
    }
    case '0-1': {
      // Piece 1 is west of piece 2
      return fromConnections[1] === toConnections[3];
    }
    case '-10': {
      // Piece 1 is north of piece 2
      return fromConnections[2] === toConnections[0];
    }
    case '01': {
      // Piece 1 is east of piece 2
      return fromConnections[3] === toConnections[1];
    }
  }
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

export const isLegalStationPlacement = (posX, posY, rows, columns, connections) => {
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
