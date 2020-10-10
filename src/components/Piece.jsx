import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { SelectionWheel } from 'components/SelectionWheel';

import PIECES from 'constants/assetsMap';
import { PIECE_TYPES } from 'constants/pieces';
import { GAME_STAGE } from 'constants/game';

const actionTypes = {
  SET_ALLOW_ROTATE: 'SET_ALLOW_ROTATE',
  SET_TYPE: 'SET_TYPE',
  SET_ROTATE: 'SET_ROTATE',
  SET_DISABLED: 'SET_DISABLED',
  SET_ENABLED: 'SET_ENABLED',
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
    case actionTypes.SET_ENABLED:
      return { ...state, isEnabled: true };
    case actionTypes.SET_DISABLED:
      return { ...state, isEnabled: false };
    case actionTypes.SHOW_SELECTION_WHEEL:
      return { ...state, selectionWheel: true };
    case actionTypes.HIDE_SELECTION_WHEEL:
      return { ...state, selectionWheel: false };
  }
};

const Piece = ({ cornerPiece, enabled, rotation, type, stage, posX, posY, setPiece }) => {
  const [
    { allowRotate, internalType, internalRotate, isEnabled, selectionWheel },
    dispatch
  ] = useReducer(reducer, {
    allowRotate: false,
    internalType: type,
    internalRotate: rotation ? rotation : 0,
    isEnabled: true,
    selectionWheel: false
  });

  useEffect(() => {
    if (cornerPiece === true && GAME_STAGE[stage] === GAME_STAGE.STATIONS)
      dispatch({ type: actionTypes.SET_DISABLED });
  }, [stage]);

  const showWheel = () => (isEnabled ? dispatch({ type: actionTypes.SHOW_SELECTION_WHEEL }) : null);

  const hideWheel = () => dispatch({ type: actionTypes.HIDE_SELECTION_WHEEL });

  const setSelection = type => {
    dispatch({ type: actionTypes.SET_TYPE, payload: type });
    dispatch({ type: actionTypes.SET_ALLOW_ROTATE, payload: PIECE_TYPES[type].allowRotate });
  };

  const saveSelection = () => {
    hideWheel();
    setPiece(posX, posY, internalType, internalRotate);
  };

  const setRotation = rotation => {
    dispatch({
      type: actionTypes.SET_ROTATE,
      payload: Math.abs(internalRotate + rotation) === 360 ? 0 : internalRotate + rotation
    });
  };

  return (
    <div
      className={`piece piece-${type} ${enabled ? 'enabled' : 'disabled'} ${
        selectionWheel ? 'show-wheel' : ''
      }`}
    >
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
        {type && <img className={`rotate-${rotation}`} src={PIECES[type]} />}
      </div>
    </div>
  );
};

Piece.propTypes = {
  cornerPiece: PropTypes.bool.isRequired,
  rotation: PropTypes.number.isRequired,
  type: PropTypes.oneOf([...Object.keys(PIECE_TYPES), '']).isRequired,
  stage: PropTypes.oneOf([...Object.keys(GAME_STAGE), '']).isRequired,
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  setPiece: PropTypes.func.isRequired
};

export default Piece;
