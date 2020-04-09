import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
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
              ></div>
            );
          });
        })}
      </div>
    );
  }
}

export default Board;
