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
