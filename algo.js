const adjList = [
  [1, 6, 8],
  [0, 4, 6, 9],
  [4, 6],
  [4, 5, 8],
  [1, 2, 3, 5, 9],
  [3, 4],
  [0, 1, 2],
  [8, 9],
  [0, 3, 7],
  [1, 4, 7],
];

function findShortestPath(
  start,
  end,
  sPath = `${start} => `,
  visited = [start]
) {
  if (start === null) return null;
  if (start === end) return sPath;

  const vertices = adjList[start];
  if (vertices.includes(end)) return sPath + " " + end;

  for (let i = 0; i < vertices.length; i++) {
    if (visited.includes(vertices[i])) continue;
    visited.push(vertices[i]);

    const path = findShortestPath(
      vertices[i],
      end,
      sPath + vertices[i] + " => ",
      visited
    );

    if (path === null) continue;
    return path;
  }
}

console.log(findShortestPath(9, 2)); // returns 0 => 1 =>  4
// console.log(findShortestPath(3, 7)); // stack overflow
