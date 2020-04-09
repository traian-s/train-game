import React from 'react';
import { connect } from 'react-redux';
import { setColumns, setRows } from 'store/actions/ui';
import Board from 'views/Board';

function App({ rows, columns, setRows, setColumns }) {
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
      </div>
      <Board rows={rows} columns={columns} />
    </div>
  );
}

const mapStateToProps = state => ({
  rows: state.ui.board.rows,
  columns: state.ui.board.columns
});

const mapDispatchToProps = {
  setRows,
  setColumns
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
