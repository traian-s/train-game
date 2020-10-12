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
  console.log(`Rotate connections called with rotation: ${rotation} and connections:`, connections);
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

export const isOnMap = (posX, posY, gameMap) => {
  return typeof gameMap[posX] !== 'undefined' && typeof gameMap[posX][posY] !== 'undefined';
};

/**
 * Given a cell and a game map returns an array of legal paths from that cell to adjacent cells
 *
 * @param {number} posX X position of cell
 * @param {number} posY Y position of cell
 * @param {array} gameMap
 *
 * @returns {array} Returns array of legal directions
 */
export const getAdjacentDirections = (posX, posY, gameMap, connections = [1, 1, 1, 1]) => {
  console.log(`getAdjacentDirections called with ${posX} ${posY} `);
  if (!isOnMap(posX, posY, gameMap)) return null;
  return [
    [posX - 1, posY],
    [posX, posY + 1],
    [posX + 1, posY],
    [posX, posY - 1]
  ]
    .filter((el, idx) => connections[idx] === 1)
    .filter(el => isOnMap(...el, gameMap));
};

export const isCellOccupied = ({ occupied }) => occupied !== false;

export const getLegalMoves = (gameMap, player) => {
  // console.log(`getLegalMoves called with ${gameMap} ${player}`);
  gameMap = gameMap || fakeBoard;
  let legalMoves = [];
  if (!gameMap.length || !player) return;
  gameMap.map((column, posX) => {
    column.map((cell, posY) => {
      if (cell.ownerId === player) {
        legalMoves = [
          ...legalMoves,
          ...getAdjacentDirections(posX, posY, gameMap, cell.connections)
        ];
      }
    });
  });

  console.log(`Legal Moves for player ${player} are: `, legalMoves);
  return legalMoves;
};

export const isLegalStationPlacement = (posX, posY, rows, columns, connections) => {
  console.log(connections);
  let legalMove = true;
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
      console.log(`ILLEGAL MOVE. ${DIRECTIONS[idx]} IS BLOCKED.`);
      legalMove = false;
    }
  });

  return legalMove;
};
