function knightMoves(start, end, que = []) {
  if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
    return;
  }

  que.push(start);

  const curr = que[que.length - 1];
  const last = que[0];

  //FORWARD BIG RIGHT
  if (curr[0] + 1 <= 7 && curr[1] + 2 <= 7)
    knightMoves([curr[0] + 1, curr[1] + 2], end, que);

  //FORWARD SMALL RIGHT
  if (curr[0] + 2 <= 7 && curr[1] + 1 <= 7)
    knightMoves([curr[0] + 2, curr[1] + 1], end, que);

  //BACKWARD BIG RIGHT
  if (last[0] + 1 <= 7 && last[1] - 2 >= 0)
    knightMoves([last[0] + 1, last[1] - 2], end, que);

  //BACKWARD SMALL RIGHT
  if (last[0] + 2 <= 7 && last[1] - 1 >= 0)
    knightMoves([last[0] + 2, last[1] - 1], end, que);

  //BACKWARD BIG LEFT
  if (last[0] - 1 >= 0 && last[1] - 2 >= 0)
    knightMoves([last[0] - 1, last[1] - 2], end, que);

  //BACKWARD SMALL LEFT
  if (last[0] - 1 >= 0 && last[1] - 1 >= 0)
    knightMoves([last[0] - 2, last[1] - 1], end, que);

  //FORWARD SMALL LEFT
  if (curr[0] - 2 >= 0 && curr[1] + 1 <= 7)
    knightMoves([curr[0] - 2, curr[1] + 1], end, que);

  //FORWARD BIG LEFT
  if (curr[0] - 1 >= 0 && curr[1] + 2 <= 7)
    knightMoves([curr[0] - 1, curr[1] + 2], end, que);

  if (que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1]) {
    const arr = [];
    for (const q of que) {
      arr.push(q);
      if (q[0] === end[0] && q[1] === end[1]) {
        break;
      }
    }

    return arr;
  }

  que.pop();
}
console.log(knightMoves([0, 0], [7, 7]));
