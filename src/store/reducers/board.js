import {
  SET_BOARD,
  SET_COLUMNS,
  SET_ROWS,
  SET_PIECE,
  ENABLE_PIECE,
  DISABLE_PIECE,
  ENABLE_ALL_PIECES
} from 'store/types/board';

export const initialState = {
  config: {
    rows: 8,
    columns: 8
  },
  gameMap: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOARD:
      return { ...state, gameMap: action.payload };

    case SET_ROWS:
      return { ...state, config: { ...state.config, rows: action.payload } };

    case SET_COLUMNS:
      return { ...state, config: { ...state.config, columns: action.payload } };

    case SET_PIECE:
      return {
        ...state,
        gameMap: Object.assign([...state.gameMap], {
          [action.payload.x]: Object.assign([...state.gameMap[action.payload.x]], {
            [action.payload.y]: {
              ...action.payload.piece
            }
          })
        })
      };

    case ENABLE_PIECE:
      return {
        ...state,
        gameMap: Object.assign([...state.gameMap], {
          [action.payload.x]: Object.assign([...state.gameMap[action.payload.x]], {
            [action.payload.y]: {
              ...state.gameMap[action.payload.x][action.payload.y],
              enabled: true
            }
          })
        })
      };

    case DISABLE_PIECE:
      return {
        ...state,
        gameMap: Object.assign([...state.gameMap], {
          [action.payload.x]: Object.assign([...state.gameMap[action.payload.x]], {
            [action.payload.y]: {
              ...state.gameMap[action.payload.x][action.payload.y],
              enabled: false
            }
          })
        })
      };

    case ENABLE_ALL_PIECES: {
      return {
        ...state,
        gameMap: state.gameMap.map(rows => rows.map(cell => ({ ...cell, enabled: true })))
      };
    }

    default:
      return state;
  }
};
