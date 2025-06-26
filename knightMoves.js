function knightMoves(start, end) {
  const que = [];
  const connections = [];

  que.push(start);

  while (
    !(que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
  ) {
    const current = que[0];

    const moves = [
      {
        row: current[0] + 1,
        column: current[1] + 2,
        checkRow: current[0] + 1 <= 7,
        checkColumn: current[1] + 2 <= 7,
      },
      {
        row: current[0] + 2,
        column: current[1] + 1,
        checkRow: current[0] + 2 <= 7,
        checkColumn: current[1] + 1 <= 7,
      },
      {
        row: current[0] + 2,
        column: current[1] - 1,
        checkRow: current[0] + 2 <= 7,
        checkColumn: current[1] - 1 >= 0,
      },
      {
        row: current[0] + 1,
        column: current[1] - 2,
        checkRow: current[0] + 1 <= 7,
        checkColumn: current[1] - 2 >= 0,
      },
      {
        row: current[0] - 1,
        column: current[1] - 2,
        checkRow: current[0] - 1 >= 0,
        checkColumn: current[1] - 2 >= 0,
      },
      {
        row: current[0] - 2,
        column: current[1] - 1,
        checkRow: current[0] - 2 >= 0,
        checkColumn: current[1] - 1 >= 0,
      },
      {
        row: current[0] - 2,
        column: current[1] + 1,
        checkRow: current[0] - 2 >= 0,
        checkColumn: current[1] + 1 <= 7,
      },
      {
        row: current[0] - 1,
        column: current[1] + 2,
        checkRow: current[0] - 1 >= 0,
        checkColumn: current[1] + 2 <= 7,
      },
    ];

    for (let move of moves) {
      if (move.checkRow && move.checkColumn) {
        connections.push({
          current: current,
          next: [move.row, move.column],
        });

        que.push([move.row, move.column]);
      }

      if (
        que[que.length - 1][0] === end[0] &&
        que[que.length - 1][1] === end[1]
      ) {
        const mid = [end];
        connections.reverse();

        let next = end;

        connections.forEach((path) => {
          if (path.next[0] === next[0] && path.next[1] === next[1]) {
            next = path.current;
            mid.push(path.current);
          }
        });

        return mid.reverse();
      }
    }

    que.shift();
  }
}

console.log(knightMoves([0, 0], [1, 1]));
