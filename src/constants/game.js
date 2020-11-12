import { PIECE_TYPES } from 'constants/pieces';

export const GAME_STAGE = {
  FOREST: {
    type: 'FOREST',
    moves: 3,
    piece: [PIECE_TYPES.forest.type]
  },
  STATIONS: {
    type: 'STATIONS',
    moves: 2,
    piece: [PIECE_TYPES.station.type]
  },
  TRACKS: {
    type: 'TRACKS',
    moves: 1,
    piece: [
      PIECE_TYPES.bridge.type,
      PIECE_TYPES.curve.type,
      PIECE_TYPES.line.type,
      PIECE_TYPES.switch.type
    ]
  }
};

export const PIECE_COUNT = {
  forest: 3,
  station: 2,
  bridge: 2,
  curve: 8,
  line: 8,
  switch: 2
};

export const GAME_STAGE_ORDER = ['FOREST', 'STATIONS', 'TRACKS'];
