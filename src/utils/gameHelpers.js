// export const isMatch = (pieceA, pieceB) => {};

export const rotateConnections = (connections, rotation) => {
  const connectionsCopy = [...connections];
  const reverse = rotation < 0;
  const times = Math.abs(rotation / 90);
  for (let i = 0; i < times; i++) {
    if (reverse) connectionsCopy.unshift(connectionsCopy.pop());
    else connectionsCopy.push(connectionsCopy.shift());
  }
  return connectionsCopy;
};

export const getAdjacentSquares = (posX, posY, rows, columns, padCount) => {
  const adjacentSquares = [];
  for (let i = posX - padCount; i <= posX + padCount; i++) {
    for (let j = posY - padCount; j <= posY + padCount; j++) {
      if (i >= 0 && i < rows && j >= 0 && j < columns) adjacentSquares.push([i, j]);
    }
  }
  return adjacentSquares;
};
