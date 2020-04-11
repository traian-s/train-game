import { combineReducers } from 'redux';
import boardReducer from './board';

export const reducers = combineReducers({
  board: boardReducer
});
