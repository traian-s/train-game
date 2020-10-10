import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initBoard, setPiece } from 'store/actions/board';
import { initPlayers, playerMakeMove } from 'store/actions/game';
import Piece from 'components/Piece';

const Board = ({ board, rows, columns, stage, setPiece, initBoard, initPlayers }) => {
  useEffect(() => {
    initBoard();
    initPlayers();
  }, []);

  return (
    <div className={'game-board'} style={{ width: `calc(80px * ${columns})` }}>
      {board.map((row, i) =>
        row.map((cell, j) => {
          const isCornerPiece =
            (i == 0 && j == 0) ||
            (i == rows - 1 && j == columns - 1) ||
            (i == 0 && j == columns - 1) ||
            (i == rows - 1 && j == 0);
          return (
            <div
              className={`cell 
                ${j === columns - 1 ? 'right-edge' : ''} 
                ${i === rows - 1 ? 'bottom-edge' : ''}`}
              style={{ flex: `calc(100% / ${columns} - 1px) 0 0` }}
              key={`cell-${i}${j}`}
            >
              <Piece
                cornerPiece={isCornerPiece}
                posX={i}
                posY={j}
                setPiece={setPiece}
                stage={stage}
                {...cell}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  board: state.board.gameMap,
  stage: state.game.turns.stage.type
});

const mapDispatchToProps = { initBoard, initPlayers, setPiece, playerMakeMove };

Board.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  board: PropTypes.array,
  initBoard: PropTypes.func,
  initPlayers: PropTypes.func,
  setPiece: PropTypes.func,
  stage: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
