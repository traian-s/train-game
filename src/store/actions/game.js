import { GAME_STAGE } from 'constants/game';
import {
  SET_TURN,
  SET_PLAYER_COUNT,
  SET_PLAYERS,
  SET_ACTIVE_PLAYER,
  SET_GAME_STAGE,
  PLAYER_MOVE_ADD
} from 'store/types/game';

import { enableAllPieces, showLegalMoves } from 'store/actions/board';

export const setGameStage = stage => ({ type: SET_GAME_STAGE, payload: stage });
export const setPlayerCount = playerCount => ({ type: SET_PLAYER_COUNT, payload: playerCount });
export const setPlayers = players => ({ type: SET_PLAYERS, payload: players });
export const setActivePlayer = player => ({ type: SET_ACTIVE_PLAYER, payload: player });
export const playerMoveAdd = () => ({ type: PLAYER_MOVE_ADD });

export const changeGameStage = () => (dispatch, getState) => {
  const {
    game: {
      turns: { stage }
    }
  } = getState();
  stage === GAME_STAGE.FOREST && dispatch(setGameStage(GAME_STAGE.STATIONS));
  stage === GAME_STAGE.STATIONS && dispatch(setGameStage(GAME_STAGE.TRACKS));
};

export const playerEndTurn = () => (dispatch, getState) => {
  const {
    game: {
      players,
      activeTurn: { player }
    }
  } = getState();

  const activeIdx = players.findIndex(p => p.id === player.id);
  if (!players[activeIdx + 1]) dispatch(changeGameStage());
  const {
    game: {
      turns: {
        stage: { moves }
      }
    }
  } = getState();

  const nextPlayer = {
    player: players[activeIdx + 1] ? players[activeIdx + 1] : players[0],
    moves: { allowed: moves, executed: 0 }
  };
  dispatch(enableAllPieces());
  dispatch(setActivePlayer(nextPlayer));
};

export const initPlayers = () => (dispatch, getState) => {
  const {
    game: { playerCount }
  } = getState();

  const players = [...Array(parseInt(playerCount))].map((_, i) => ({
    id: i + 1,
    name: `Player ${i + 1}`
  }));

  dispatch(setPlayers(players));
  dispatch(setGameStage(GAME_STAGE.STATIONS));
  const activePlayer = {
    player: { ...players[0] },
    moves: { allowed: GAME_STAGE.STATIONS.moves, executed: 0 }
  };
  dispatch(setActivePlayer(activePlayer));
};

export const playerMakeMove = () => (dispatch, getState) => {
  const {
    game: {
      activeTurn: {
        moves: { allowed, executed }
      }
    }
  } = getState();

  dispatch(playerMoveAdd());
  if (executed + 1 === allowed) dispatch(playerEndTurn());
  dispatch(showLegalMoves());
};

export const setTurn = () => ({ type: SET_TURN });
