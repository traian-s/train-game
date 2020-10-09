import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setColumns, setRows } from 'store/actions/board';
import Board from 'views/Board';

function App({ rows, columns, setRows, setColumns, stage, activePlayer }) {
  return (
    <div className="App">
      <div className={'controls'}>
        <label>{'Rows:'}</label>
        <input
          type={'number'}
          pattern={'[0-9]*'}
          value={rows}
          onChange={e => setRows(e.target.value)}
        />
        <br />
        <label>{'Columns:'}</label>
        <input
          type={'number'}
          pattern={'[0-9]*'}
          value={columns}
          onChange={e => setColumns(e.target.value)}
        />
        <br/>
        <h3>Stage: {stage}</h3>
        {activePlayer.player.name} make {activePlayer.moves.allowed - activePlayer.moves.executed} moves
      </div>
      <Board rows={rows} columns={columns} />
    </div>
  );
}

const mapStateToProps = state => ({
  rows: state.board.config.rows,
  columns: state.board.config.columns,
  stage: state.game.turns.stage.type,
  activePlayer: state.game.activeTurn
});

const mapDispatchToProps = {
  setRows,
  setColumns
};

App.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  setRows: PropTypes.func,
  setColumns: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
