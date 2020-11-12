import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { initBoard, setPiece } from 'store/actions/board';
import { initPlayers, playerMakeMove } from 'store/actions/game';
import Piece from 'components/Piece';

const Board = ({
  board,
  dropTargetX,
  dropTargetY,
  hoverTargetX,
  hoverTargetY,
  targetPiece,
  rows,
  columns,
  stage,
  setPiece,
  initBoard,
  initPlayers
}) => {
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
                dropTargetX={dropTargetX}
                dropTargetY={dropTargetY}
                hoverTargetX={hoverTargetX}
                hoverTargetY={hoverTargetY}
                targetPiece={targetPiece}
                {...cell}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = ({
  board: { gameMap: board },
  game: {
    turns: {
      stage: { type: stage }
    },
    activeTurn: {
      moveDetails: {
        dropTarget: { clientX: dropTargetX, clientY: dropTargetY } = {},
        hoverTarget: { clientX: hoverTargetX, clientY: hoverTargetY } = {},
        piece: targetPiece = ''
      } = {}
    }
  }
}) => ({
  board,
  stage,
  dropTargetX,
  dropTargetY,
  hoverTargetX,
  hoverTargetY,
  targetPiece
});

const mapDispatchToProps = { initBoard, initPlayers, setPiece, playerMakeMove };

Board.propTypes = {
  board: PropTypes.array,
  columns: PropTypes.number,
  dropTarget: PropTypes.object,
  dropTargetX: PropTypes.number,
  dropTargetY: PropTypes.number,
  hoverTargetX: PropTypes.number,
  hoverTargetY: PropTypes.number,
  targetPiece: PropTypes.string,
  initBoard: PropTypes.func,
  initPlayers: PropTypes.func,
  rows: PropTypes.number,
  setPiece: PropTypes.func,
  stage: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
