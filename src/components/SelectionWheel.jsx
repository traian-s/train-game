import React from 'react';

import PIECES from 'constants/assetsMap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faTimes } from '@fortawesome/free-solid-svg-icons';

export const SelectionWheel = ({
  allowRotate,
  internalType,
  internalRotate,
  hideWheel,
  setSelection,
  saveSelection,
  setRotation,
  stage
}) => (
  <div className={'selection-wheel'}>
    {Object.keys(PIECES)
      .filter(piece => stage.piece.includes(piece))
      .map((key, idx) => {
        return (
          <div key={idx} className={`quadrant quadrant-${idx}`} onClick={() => setSelection(key)}>
            <img src={PIECES[key]} />
          </div>
        );
      })}
    <div className={'selection-preview'} onClick={() => saveSelection()}>
      {internalType && <img className={`rotate-${internalRotate}`} src={PIECES[internalType]} />}
    </div>
    {allowRotate && (
      <>
        <div className={'selection-rotate-right'} onClick={() => setRotation(90)}>
          <FontAwesomeIcon icon={faUndo} />
        </div>
        <div className={'selection-rotate-left'} onClick={() => setRotation(-90)}>
          <FontAwesomeIcon icon={faUndo} />
        </div>
      </>
    )}
    <div className={'selection-close'} onClick={() => hideWheel()}>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  </div>
);
