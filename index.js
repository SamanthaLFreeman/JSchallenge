let square = [
  [4, 3, 5], [2, 6, 9], [7, 8, 1],
  [6, 8, 2], [5, 7, 1], [4, 9, 3],
  [1, 9, 7], [8, 3, 4], [5, 6, 2]
]

let row = [
  [4, 3, 5], [2, 6, 9], [7, 8, 1]
]

let column = [
  [4, 3, 5],
  [6, 8, 2],
  [1, 9, 7],
  [8, 2, 6],
  [3, 7, 4],
  [9, 5, 1],
  [5, 1, 9],
  [2, 4, 8],
  [7, 6, 3]
]


const testRow = (row) => {
  let checkRow = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (!checkRow.includes(row[i][j])) {
        checkRow.push(row[i][j])
      } else {
        return false;
      }
    }
  }

  return true;
}

testRow(row);

const testColumn = (column) => {
  let checkColumn = [];
  for (var i = 0; i < 3; i++) {
    for (var j = 0; i < 9; i++) {
      if (!checkColumn.includes(column[i][j])) {
        checkColumn.push(column[i][j])
      } else {
        return false;
      }
    }
  }

  return true;
}

testColumn(column);

const testSquare = (square) => {
  let checkSquare = [];
  for (var i = 0; i < 3; i++) {
    checkSquare.push(square[0][i])
    checkSquare.push(square[3][i])
    checkSquare.push(square[6][i])
  }

  return true;
}

testSquare(square);