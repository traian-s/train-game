import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initBoard } from 'store/actions/board';
import Piece from 'components/Piece';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    };
  }

  componentDidMount() {
    const {
      props: { initBoard }
    } = this;

    initBoard();
  }

  render() {
    const {
      props: { rows, columns }
    } = this;
    return (
      <div className={'game-board'} style={{ width: `calc(80px * ${columns})` }}>
        {[...Array(parseInt(rows))].map((_, i) => {
          return [...Array(parseInt(columns))].map((_, j) => {
            return (
              <div
                className={`cell 
                ${j === columns - 1 ? 'right-edge' : ''} 
                ${i === rows - 1 ? 'bottom-edge' : ''}`}
                style={{ flex: `calc(100% / ${columns} - 1px) 0 0` }}
                key={`cell-${i}${j}`}
              >
                <Piece
                  type={['line', 'curve', 'switch', 'bridge'][Math.floor(Math.random() * 4)]}
                  rotate={[0, 90, 180, 270][Math.floor(Math.random() * 4)]}
                />
              </div>
            );
          });
        })}
      </div>
    );
  }
}

const mapDispatchToProps = { initBoard };

export default connect(null, mapDispatchToProps)(Board);
