import {
  INIT_PLAYERS,
  SET_PLAYER_COUNT,
  SET_PLAYERS,
  SET_TURN,
  SET_GAME_STAGE,
  SET_ACTIVE_PLAYER,
  PLAYER_MOVE_ADD
} from 'store/types/game';

export const initialState = {
  playerCount: 2,
  players: {},
  turns: {
    count: 1,
    stage: ''
  },
  activeTurn: {
    player: {},
    moves: {
      allowed: 0,
      executed: 0
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_PLAYERS:
      return { ...state, players: { ...action.payload } };
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
    case PLAYER_MOVE_ADD:
      return {
        ...state,
        activeTurn: {
          ...state.activeTurn,
          moves: { ...state.activeTurn.moves, executed: state.activeTurn.moves.executed + 1 }
        }
      };
    default:
      return state;
  }
};
