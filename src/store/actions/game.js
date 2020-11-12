/* eslint-disable no-console */
import { GAME_STAGE, GAME_STAGE_ORDER, PIECE_COUNT } from 'constants/game';
import {
  SET_TURN,
  SET_PLAYER_COUNT,
  SET_PLAYERS,
  SET_ACTIVE_PLAYER,
  SET_GAME_STAGE,
  SET_PIECES,
  SET_MOVE_DROP_TARGET,
  SET_MOVE_HOVER_TARGET,
  PLAYER_MOVE_ADD,
  PLAYER_SET_CONNECTIONS,
  SET_MOVE_PIECE_TYPE
} from 'store/types/game';

import { enableAllPieces, showLegalMoves } from 'store/actions/board';
import { logMessage } from './log';

export const setGameStage = stage => ({ type: SET_GAME_STAGE, payload: stage });
export const setPlayerCount = playerCount => ({ type: SET_PLAYER_COUNT, payload: playerCount });
export const setPlayers = players => ({ type: SET_PLAYERS, payload: players });
export const setActivePlayer = player => ({ type: SET_ACTIVE_PLAYER, payload: player });
export const setTurn = () => ({ type: SET_TURN });
export const setPieces = pieces => ({ type: SET_PIECES, payload: pieces });
export const setMoveDropTarget = point => ({ type: SET_MOVE_DROP_TARGET, payload: point });
export const setMoveHoverTarget = point => ({ type: SET_MOVE_HOVER_TARGET, payload: point });
export const setMovePieceType = type => ({ type: SET_MOVE_PIECE_TYPE, payload: type });

export const playerMoveAdd = () => ({ type: PLAYER_MOVE_ADD });
export const playerSaveConnections = (player, connections) => ({
  type: PLAYER_SET_CONNECTIONS,
  payload: { player, connections }
});

export const changeGameStage = () => (dispatch, getState) => {
  const {
    game: {
      turns: {
        stage: { type: currentStage }
      }
    }
  } = getState();
  try {
    const nextStageIdx = GAME_STAGE_ORDER.indexOf(currentStage) + 1;
    const nextStage = GAME_STAGE_ORDER[nextStageIdx];
    dispatch(setGameStage(GAME_STAGE[nextStage]));
    dispatch(setPiecesByStage(GAME_STAGE[nextStage]));
  } catch (err) {
    console.error(err);
  }
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
  dispatch(setGameStage(GAME_STAGE.FOREST));
  dispatch(setPiecesByStage(GAME_STAGE.FOREST));
  const activePlayer = {
    player: { ...players[0] },
    moves: { allowed: GAME_STAGE.FOREST.moves, executed: 0 }
  };
  dispatch(setActivePlayer(activePlayer));
};

export const initPieces = () => dispatch => {
  const pieces = GAME_STAGE.FOREST.piece.map(piece => ({ type: piece, count: PIECE_COUNT[piece] }));
  dispatch(setPieces(pieces));
};

export const setPiecesByStage = ({ type: stage }) => dispatch => {
  const pieces = GAME_STAGE[stage]?.piece.map(piece => ({
    type: piece,
    count: PIECE_COUNT[piece]
  }));
  pieces?.length && dispatch(setPieces(pieces));
};

export const playerConnectionEstablishedEvent = (player, connection) => dispatch => {
  dispatch(
    logMessage(`Congratulations! Player ${player} has established ${connection} connections`)
  );
};

export const playerEndTurn = () => (dispatch, getState) => {
  const {
    game: {
      players,
      activeTurn: { player },
      turns: {
        stage: { type: stageType }
      }
    }
  } = getState();

  console.log(`[playerEndTurn]: ACTIVE STAGE IS ${stageType}`);
  console.log(GAME_STAGE.STATIONS.type);

  const activeIdx = players.findIndex(p => p.id === player.id);

  if (!players[activeIdx + 1] && stageType !== GAME_STAGE.TRACKS.type) dispatch(changeGameStage());

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

export const playerSetConnections = (player, connections) => (dispatch, getState) => {
  const {
    game: { establishedConnections }
  } = getState();

  if (!establishedConnections[player] || establishedConnections[player] < connections) {
    dispatch(playerConnectionEstablishedEvent(player, connections));
    dispatch(playerSaveConnections(player, connections));
  }
};
