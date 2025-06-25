function knightMoves(start, end) {
  const que = [];
  let moves = [];

  que.push(start);

  while (
    !(que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
  ) {
    const current = que[0];

    moves.push(current);

    //FORWARD BIG RIGHT
    if (current[0] + 1 <= 7 && current[1] + 2 <= 7) {
      que.push([current[0] + 1, current[1] + 2]);
    }

    if (
      moves[moves.length - 1][0] === end[0] &&
      moves[moves.length - 1][1] === end[1]
    ) {
      return moves;
    }

    //FORWARD SMALL RIGHT
    if (current[0] + 2 <= 7 && current[1] + 1 <= 7) {
      que.push([current[0] + 2, current[1] + 1]);
    }

    if (
      moves[moves.length - 1][0] === end[0] &&
      moves[moves.length - 1][1] === end[1]
    ) {
      return moves;
    }
    //BACKWARD BIG RIGHT
    if (current[0] + 1 <= 7 && current[1] - 2 >= 0) {
      que.push([current[0] + 1, current[1] - 2]);
    }

    if (
      moves[moves.length - 1][0] === end[0] &&
      moves[moves.length - 1][1] === end[1]
    ) {
      return moves;
    }
    //BACKWARD SMALL RIGHT
    if (current[0] + 2 <= 7 && current[1] - 1 >= 0) {
      que.push([current[0] + 2, current[1] - 1]);
    }

    if (
      moves[moves.length - 1][0] === end[0] &&
      moves[moves.length - 1][1] === end[1]
    ) {
      return moves;
    }
    //BACKWARD BIG LEFT
    if (current[0] - 1 >= 0 && current[1] - 2 >= 0) {
      que.push([current[0] - 1, current[1] - 2]);
    }

    if (
      moves[moves.length - 1][0] === end[0] &&
      moves[moves.length - 1][1] === end[1]
    ) {
      return moves;
    }
    //BACKWARD SMALL LEFT
    if (current[0] - 2 >= 0 && current[1] - 1 >= 0) {
      que.push([current[0] - 2, current[1] - 1]);
    }

    if (
      moves[moves.length - 1][0] === end[0] &&
      moves[moves.length - 1][1] === end[1]
    ) {
      return moves;
    }
    //FORWARD SMALL LEFT
    if (current[0] - 2 >= 0 && current[1] + 1 <= 7) {
      que.push([current[0] - 2, current[1] + 1]);
    }

    if (
      moves[moves.length - 1][0] === end[0] &&
      moves[moves.length - 1][1] === end[1]
    ) {
      return moves;
    }
    //FORWARD BIG LEFT
    if (current[0] - 1 >= 0 && current[1] + 2 <= 7) {
      que.push([current[0] - 1, current[1] + 2]);
    }

    if (
      moves[moves.length - 1][0] === end[0] &&
      moves[moves.length - 1][1] === end[1]
    ) {
      return moves;
    }

    que.shift();
  }
}

console.log(knightMoves([0, 0], [4, 3]));
