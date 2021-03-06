// NORTH, EAST, SOUTH, WEST - CONNECTIONS ARE CLOCKWISE

export const PIECE_TYPES = {
  bridge: {
    type: 'bridge',
    connections: [1, 1, 1, 1],
    allowRotate: true,
    defaultCount: 4
  },
  curve: {
    type: 'curve',
    connections: [1, 1, 0, 0],
    allowRotate: true,
    defaultCount: 8
  },
  line: {
    type: 'line',
    connections: [0, 1, 0, 1],
    allowRotate: true,
    defaultCount: 16
  },
  switch: {
    type: 'switch',
    connections: [1, 1, 0, 1],
    allowRotate: true,
    defaultCount: 4
  },
  station: {
    type: 'station',
    connections: [1, 1, 0, 1],
    allowRotate: true
  },
  forest: {
    type: 'forest',
    connections: [0, 0, 0, 0],
    allowRotate: false
  }
};

export const DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

// export Object.freeze(PIECE_TYPES);

// export PIECE_TYPES;
