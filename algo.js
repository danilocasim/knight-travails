function knightMoves(start, end) {
  const que = [];
  que.push(start);

  while (
    !(que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
  ) {
    const current = que[0];

    //FORWARD BIG RIGHT
    que.push([current[0] + 1, current[1] + 2]);

    if (que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
      return que;

    //FORWARD SMALL RIGHT
    if (current[0] + 2 <= 7 && current[1] + 1 <= 7)
      que.push([current[0] + 2, current[1] + 1]);

    if (que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
      return que;

    //BACKWARD BIG RIGHT
    if (current[0] + 1 <= 7 && current[1] - 2 >= 0)
      que.push([current[0] + 1, current[1] - 2]);

    if (que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
      return que;

    //BACKWARD SMALL RIGHT
    if (current[0] + 2 <= 7 && current[1] - 1 >= 0)
      que.push([current[0] + 2, current[1] - 1]);

    if (que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
      return que;

    //BACKWARD BIG LEFT
    if (current[0] - 1 >= 0 && current[1] - 2 >= 0)
      que.push([current[0] - 1, current[1] - 2]);

    if (que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
      return que;

    //BACKWARD SMALL LEFT
    if (current[0] - 2 >= 0 && current[1] - 1 >= 0)
      que.push([current[0] - 2, current[1] - 1]);

    if (que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
      return que;

    //FORWARD SMALL LEFT
    if (current[0] - 2 >= 0 && current[1] + 1 <= 7)
      que.push([current[0] - 2, current[1] + 1]);

    if (que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
      return que;

    //FORWARD BIG LEFT
    if (current[0] - 1 >= 0 && current[1] + 2 <= 7)
      que.push([current[0] - 1, current[1] + 2]);

    if (que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
      return que;

    que.shift();
  }
}

console.log(knightMoves([0, 0], [3, 3]));
