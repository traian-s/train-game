import {
  INIT_PLAYERS,
  SET_PLAYER_COUNT,
  SET_PLAYERS,
  SET_TURN,
  SET_GAME_STAGE,
  SET_ACTIVE_PLAYER,
  SET_MOVE_DROP_TARGET,
  SET_MOVE_PIECE_TYPE,
  SET_MOVE_HOVER_TARGET,
  SET_PIECES,
  PLAYER_MOVE_ADD,
  PLAYER_SET_CONNECTIONS
} from 'store/types/game';

export const initialState = {
  activeTurn: {
    player: {},
    moves: {
      allowed: 0,
      executed: 0
    },
    moveDetails: {
      dropTarget: {},
      hoverTarget: {},
      piece: ''
    }
  },
  establishedConnections: {},
  pieces: [],
  playerCount: 1,
  players: {},
  turns: {
    count: 1,
    stage: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_PLAYERS:
      return { ...state, players: { ...action.payload } };
    case PLAYER_MOVE_ADD:
      return {
        ...state,
        activeTurn: {
          ...state.activeTurn,
          moves: { ...state.activeTurn.moves, executed: state.activeTurn.moves.executed + 1 }
        }
      };
    case PLAYER_SET_CONNECTIONS:
      return {
        ...state,
        establishedConnections: {
          ...state.establishedConnections,
          [action.payload.player]: action.payload.connections
        }
      };
    case SET_TURN:
      return { ...state, turns: { ...state.turns, active: action.payload } };
    case SET_PLAYER_COUNT:
      return { ...state, playerCount: action.payload };
    case SET_PLAYERS:
      return { ...state, players: action.payload };
    case SET_GAME_STAGE:
      return { ...state, turns: { ...state.turns, stage: action.payload } };
    case SET_ACTIVE_PLAYER:
      return { ...state, activeTurn: action.payload };
    case SET_MOVE_DROP_TARGET:
      return {
        ...state,
        activeTurn: {
          ...state.activeTurn,
          moveDetails: { ...state.activeTurn.moveDetails, dropTarget: { ...action.payload } }
        }
      };
    case SET_MOVE_HOVER_TARGET:
      return {
        ...state,
        activeTurn: {
          ...state.activeTurn,
          moveDetails: { ...state.activeTurn.moveDetails, hoverTarget: { ...action.payload } }
        }
      };
    case SET_MOVE_PIECE_TYPE:
      console.log(`Called with`, action);
      return {
        ...state,
        activeTurn: {
          ...state.activeTurn,
          moveDetails: { ...state.activeTurn.moveDetails, piece: action.payload }
        }
      };
    case SET_PIECES:
      return {
        ...state,
        pieces: [...action.payload]
      };
    default:
      return state;
  }
};
