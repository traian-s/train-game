import React from 'react';
import PIECES from 'constants/assetsMap';

export const Piece = ({ type, rotate }) => {
  return (
    <div className={`piece piece-${type} rotate-${rotate}`}>
      <img src={PIECES[type]} />
    </div>
  );
};

export default Piece;