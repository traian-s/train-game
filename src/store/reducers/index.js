import { combineReducers } from 'redux';
import boardReducer from './board';
import gameReducer from './game';
import logReducer from './log';

export const reducers = combineReducers({
  board: boardReducer,
  game: gameReducer,
  messageLog: logReducer
});
