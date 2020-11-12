import React, { useEffect, useRef, useReducer, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import { SelectionWheel } from './SelectionWheel';

import PIECES from 'constants/assetsMap';
import { PIECE_TYPES } from 'constants/pieces';
import { GAME_STAGE } from 'constants/game';

import styles from './Piece.module';

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

const Piece = ({
  cornerPiece,
  dropTargetX,
  dropTargetY,
  hoverTargetX,
  hoverTargetY,
  targetPiece,
  enabled,
  rotation,
  type,
  stage,
  posX,
  posY,
  setPiece
}) => {
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

  const pieceRef = useRef(null);
  const boundingBox = useRef(null);

  useLayoutEffect(() => {
    boundingBox.current = pieceRef.current.getBoundingClientRect();
  }, []);

  useEffect(() => {
    if (cornerPiece === true && GAME_STAGE[stage] === GAME_STAGE.STATIONS)
      dispatch({ type: actionTypes.SET_DISABLED });
  }, [stage]);

  useEffect(() => {
    const { left, right, top, bottom } = pieceRef.current.getBoundingClientRect();
    if (left < dropTargetX && dropTargetX < right && top < dropTargetY && dropTargetY < bottom) {
      console.log(`Piece ${posX}${posY} reporting for duty sir!`);
      setPiece(posX, posY, targetPiece, 0);
    }
  }, [dropTargetX, dropTargetY]);

  useEffect(() => {
    const { left, right, top, bottom } = boundingBox.current;
    // const { left, right, top, bottom } = pieceRef.current.getBoundingClientRect();
    if (
      left < hoverTargetX &&
      hoverTargetX < right &&
      top < hoverTargetY &&
      hoverTargetY < bottom
    ) {
      console.log(`Piece ${posX}${posY} is being hovered!`);
      //setPiece(posX, posY, targetPiece, 0);
    }
  }, [hoverTargetX, hoverTargetY]);

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
      className={`${styles.piece} piece piece-${type} ${enabled ? 'enabled' : 'disabled'} ${
        selectionWheel ? 'show-wheel' : ''
      }`}
      ref={pieceRef}
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
  enabled: PropTypes.bool.isRequired,
  rotation: PropTypes.number.isRequired,
  type: PropTypes.oneOf([...Object.keys(PIECE_TYPES), '']).isRequired,
  stage: PropTypes.oneOf([...Object.keys(GAME_STAGE), '']).isRequired,
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
  setPiece: PropTypes.func.isRequired,
  dropTargetX: PropTypes.number,
  dropTargetY: PropTypes.number,
  hoverTargetX: PropTypes.number,
  hoverTargetY: PropTypes.number,
  targetPiece: PropTypes.string
};

export default Piece;
