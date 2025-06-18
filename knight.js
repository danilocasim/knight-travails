class Board {
  boardMoves = [];
  constructor() {
    for (let i = 0; i < 8; i++) {
      this.boardMoves.push([]);
      for (let j = 0; j < 8; j++) {
        this.boardMoves[i].push([]);
        // forward big L right
        if (i + 1 < 8 && j + 2 < 8) {
          this.boardMoves[i][j].push([i + 1, j + 2]);
        }

        //  forward small L right
        if (i + 2 < 8 && j + 1 < 8) {
          this.boardMoves[i][j].push([i + 2, j + 1]);
        }

        // forward big L left
        if (i - 1 >= 0 && j + 2 < 8) {
          this.boardMoves[i][j].push([i - 1, j + 2]);
        }

        // forward small L left
        if (i - 2 >= 0 && j + 1 < 8) {
          this.boardMoves[i][j].push([i - 2, j + 1]);
        }

        // backward big L right
        if (i + 1 < 8 && j - 2 >= 0) {
          this.boardMoves[i][j].push([i + 1, j - 2]);
        }

        // backward small L right
        if (i + 2 < 8 && j - 1 >= 0) {
          this.boardMoves[i][j].push([i + 2, j - 1]);
        }

        // backward big L left
        if (i - 1 >= 0 && j - 2 >= 0) {
          this.boardMoves[i][j].push([i - 1, j - 2]);
        }

        // backward small L left
        if (i - 2 >= 0 && j - 1 >= 0) {
          this.boardMoves[i][j].push([i - 2, j - 1]);
        }
      }
    }
  }

  knightMoves(start, end, sPath = `[${start}]`, visited = []) {
    if (!start) return null;
    if (start[0] === end[0] && start[1] === end[1]) return sPath;

    const row = start[0];
    const column = start[1];

    const vertices = this.boardMoves[row][column];

    outer: for (let i = 0; i < vertices.length; i++) {
      const verticesRow = vertices[i][0];
      const verticesColumn = vertices[i][1];

      for (const vertex of visited) {
        if (verticesRow === vertex[0] && verticesColumn === vertex[1])
          continue outer;
      }

      visited.push([verticesRow, verticesColumn]);

      const path = this.knightMoves(
        [verticesRow, verticesColumn],
        end,
        sPath + " => " + "[" + [verticesRow, verticesColumn] + "]",
        visited
      );

      if (path === null) continue;
      return path;
    }
  }
}

const board = new Board();

console.log(board.knightMoves([3, 3], [6, 5])); // [3,3] => [4,5] => [5,7] => [6,5]
console.log(board.knightMoves([3, 3], [2, 1])); // undefined
