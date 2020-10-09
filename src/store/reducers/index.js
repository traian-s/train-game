import { combineReducers } from 'redux';
import boardReducer from './board';
import gameReducer from './game';

export const reducers = combineReducers({
  board: boardReducer,
  game: gameReducer
});
