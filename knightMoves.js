function knightMoves(start, end) {
  const que = [];
  const connections = [];

  que.push(start);

  while (
    !(que[que.length - 1][0] === end[0] && que[que.length - 1][1] === end[1])
  ) {
    const current = que[0];

    //FORWARD BIG RIGHT
    if (current[0] + 1 <= 7 && current[1] + 2 <= 7) {
      connections.push({
        current: current,
        next: [current[0] + 1, current[1] + 2],
      });

      que.push([current[0] + 1, current[1] + 2]);
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

    //FORWARD SMALL RIGHT
    if (current[0] + 2 <= 7 && current[1] + 1 <= 7) {
      connections.push({
        current: current,
        next: [current[0] + 2, current[1] + 1],
      });

      que.push([current[0] + 2, current[1] + 1]);
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

    // Other moves ommitted for brevity

    //BACKWARD SMALL RIGHT
    if (current[0] + 2 <= 7 && current[1] - 1 >= 0) {
      connections.push({
        current: current,
        next: [current[0] + 2, current[1] - 1],
      });

      que.push([current[0] + 2, current[1] - 1]);
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

    //BACKWARD BIG RIGHT
    if (current[0] + 1 <= 7 && current[1] - 2 >= 0) {
      connections.push({
        current: current,
        next: [current[0] + 1, current[1] - 2],
      });

      que.push([current[0] + 1, current[1] - 2]);
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

    //BACKWARD BIG LEFT
    if (current[0] - 1 >= 0 && current[1] - 2 >= 0) {
      connections.push({
        current: current,
        next: [current[0] - 1, current[1] - 2],
      });

      que.push([current[0] - 1, current[1] - 2]);
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

    //BACKWARD SMALL LEFT
    if (current[0] - 2 >= 0 && current[1] - 1 >= 0) {
      connections.push({
        current: current,
        next: [current[0] - 2, current[1] - 1],
      });

      que.push([current[0] - 2, current[1] - 1]);
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

    //FORWARD SMALL LEFT
    if (current[0] - 2 >= 0 && current[1] + 1 <= 7) {
      connections.push({
        current: current,
        next: [current[0] - 2, current[1] + 1],
      });

      que.push([current[0] - 2, current[1] + 1]);
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

    //FORWARD BIG LEFT
    if (current[0] - 1 >= 0 && current[1] + 2 <= 7) {
      connections.push({
        current: current,
        next: [current[0] - 1, current[1] + 2],
      });

      que.push([current[0] - 1, current[1] + 2]);
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

    que.shift();
  }
}

console.log(knightMoves([0, 0], [7, 7]));
