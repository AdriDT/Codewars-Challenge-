function findNextSquare(sq) {
  const square = Math.sqrt(sq);
  if (result = (square - Math.floor(square)) !== 0) {
    return -1;
  } else {
    return Math.pow((square + 1), 2);
  }
}