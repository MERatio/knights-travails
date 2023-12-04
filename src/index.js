"use strict";

function copy2dArray(originalArray) {
  return originalArray.map((row) => row.slice());
}

function getPossibleNextMove(startCoor) {
  const [row, column] = startCoor;
  const possibleNextMove = [];
  if (row <= 5 && column <= 6) {
    possibleNextMove.push([row + 2, column + 1]);
  }
  if (row <= 6 && column <= 5) {
    possibleNextMove.push([row + 1, column + 2]);
  }
  if (row >= 1 && column <= 5) {
    possibleNextMove.push([row - 1, column + 2]);
  }
  if (row >= 2 && column <= 6) {
    possibleNextMove.push([row - 2, column + 1]);
  }
  if (row >= 2 && column >= 1) {
    possibleNextMove.push([row - 2, column - 1]);
  }
  if (row >= 1 && column >= 2) {
    possibleNextMove.push([row - 1, column - 2]);
  }
  if (row <= 6 && column >= 2) {
    possibleNextMove.push([row + 1, column - 2]);
  }
  if (row <= 5 && column >= 1) {
    possibleNextMove.push([row + 2, column - 1]);
  }
  return possibleNextMove;
}

function isArrayEqual(array1, array2) {
  return array1.every((el, idx) => el === array2[idx]);
}

function getFastestPath(startCoor, targetCoor) {
  const queue = [
    {
      board: new Array(8).fill().map(() => new Array(8).fill(0)),
      coor: startCoor,
      moves: [startCoor],
    },
  ];

  queue[0].board[startCoor[0]][startCoor[1]] = 1;

  while (queue.length > 0) {
    const cur = queue.shift();
    if (isArrayEqual(cur.coor, targetCoor)) {
      return cur.moves;
    }
    const possibleNextMoves = getPossibleNextMove(cur.coor);
    for (const possibleNextMove of possibleNextMoves) {
      const isVisited =
        cur.board[possibleNextMove[0]][possibleNextMove[1]] === 1;
      if (!isVisited) {
        const newBoard = copy2dArray(cur.board);
        newBoard[possibleNextMove[0]][possibleNextMove[1]] = 1;
        queue.push({
          board: newBoard,
          coor: possibleNextMove,
          moves: [...cur.moves, possibleNextMove],
        });
      }
    }
  }
}

function knightMoves(startCoor, targetCoor) {
  const fastestPath = getFastestPath(startCoor, targetCoor);
  const pathLength = fastestPath.length - 1;
  console.log(
    `=> You made it in ${pathLength} ${
      pathLength > 0 ? "moves" : "move"
    }!  Here's your path:`,
  );
  for (const path of fastestPath) {
    console.log(`  [${path}]`);
  }
}

window.knightMoves = knightMoves;

knightMoves([3, 3], [4, 3]);
