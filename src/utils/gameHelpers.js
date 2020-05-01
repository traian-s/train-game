// export const isMatch = (pieceA, pieceB) => {};

export const rotateConnections = (connections, rotation) => {
  const reverse = rotation < 0;
  const times = Math.abs(rotation / 90);
  for (let i = 0; i < times; i++) {
    if (reverse) connections.unshift(connections.pop());
    else connections.push(connections.shift());
  }
  return connections;
};
