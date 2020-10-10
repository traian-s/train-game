import { PIECE_TYPES } from 'constants/pieces';

export const GAME_STAGE = {
  FOREST: {
    type: 'forest',
    moves: 3,
    piece: [PIECE_TYPES.forest.type]
  },
  STATIONS: {
    type: 'stations',
    moves: 2,
    piece: [PIECE_TYPES.station.type]
  },
  TRACKS: {
    type: 'tracks',
    moves: 1,
    piece: [
      PIECE_TYPES.bridge.type,
      PIECE_TYPES.curve.type,
      PIECE_TYPES.line.type,
      PIECE_TYPES.switch.type
    ]
  }
};
