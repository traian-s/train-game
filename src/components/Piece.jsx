import React, { useReducer } from 'react';

import { SelectionWheel } from 'components/SelectionWheel';

import PIECES from 'constants/assetsMap';
import { PIECE_TYPES } from 'constants/pieces';

const actionTypes = {
  SET_ALLOW_ROTATE: 'SET_ALLOW_ROTATE',
  SET_TYPE: 'SET_TYPE',
  SET_ROTATE: 'SET_ROTATE',
  SHOW_SELECTION_WHEEL: 'SHOW_SELECTION_WHEEL',
  HIDE_SELECTION_WHEEL: 'HIDE_SELECTION_WHEEL'
};

const reducer = (state, action) => {
  console.log(`${action.type} called with payload: ${action.payload}`);
  switch (action.type) {
    case actionTypes.SET_ALLOW_ROTATE:
      return { ...state, allowRotate: action.payload };
    case actionTypes.SET_TYPE:
      return { ...state, internalType: action.payload };
    case actionTypes.SET_ROTATE:
      return { ...state, internalRotate: action.payload };
    case actionTypes.SHOW_SELECTION_WHEEL:
      return { ...state, selectionWheel: true };
    case actionTypes.HIDE_SELECTION_WHEEL:
      return { ...state, selectionWheel: false };
  }
};

const Piece = ({ rotate, type, stage, x, y, setPiece }) => {
  const [{ allowRotate, internalType, internalRotate, selectionWheel }, dispatch] = useReducer(
    reducer,
    {
      allowRotate: false,
      internalType: type,
      internalRotate: rotate ? rotate : 0,
      selectionWheel: false
    }
  );

  const showWheel = () => dispatch({ type: actionTypes.SHOW_SELECTION_WHEEL });

  const hideWheel = () => dispatch({ type: actionTypes.HIDE_SELECTION_WHEEL });

  const setSelection = type => {
    dispatch({ type: actionTypes.SET_TYPE, payload: type });
    dispatch({ type: actionTypes.SET_ALLOW_ROTATE, payload: PIECE_TYPES[type].allowRotate });
  };

  const saveSelection = () => {
    hideWheel();
    setPiece(x, y, internalType, internalRotate);
  };

  const setRotation = rotation => {
    dispatch({
      type: actionTypes.SET_ROTATE,
      payload: Math.abs(internalRotate + rotation) === 360 ? 0 : internalRotate + rotation
    });
  };

  return (
    <div className={`piece piece-${type} ${selectionWheel ? 'show-wheel' : ''}`}>
      <SelectionWheel
        allowRotate={allowRotate}
        hideWheel={hideWheel}
        internalType={internalType}
        internalRotate={internalRotate}
        setSelection={setSelection}
        saveSelection={saveSelection}
        setRotation={setRotation}
        stage={stage}
      />
      <div className={'piece-image'} onClick={() => showWheel()}>
        {type && <img className={`rotate-${rotate}`} src={PIECES[type]} />}
      </div>
    </div>
  );
};

export default Piece;
