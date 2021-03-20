import Cell from "./Cell.js"
const { isEqual } = require("lodash");

class Grid {
  constructor(width, height, mineCount) {
    this.width = width;
    this.height = height;
    this.mineCount = mineCount;
    this.cells = this.createCells();
  }

  createCells() {
    const cells = []
    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        cells.push(new Cell(row, column))
      }
    }
    return cells
  }

  setMines() {

  }


}

export default Grid


// const createGrid = (width, height) => {
//  
// };
// const getRandomCell = (grid) => {
//   const randomRowIndex = Math.floor(Math.random() * grid.length);
//   const randomColumnIndex = Math.floor(Math.random() * grid[0].length);
//   return [randomRowIndex, randomColumnIndex]
// };
// // FIXME: prevent mines from being clumped together
// const setMines = (grid, initialCell, numMines) => {
//   let i = 0;
//   while (i < numMines) {
//     let [row, col] = getRandomCell(grid);
//     if (!isEqual([row, col], initialCell)) {
//       if (grid[row][col] === "_") {
//         grid[row][col] = "*";
//         i++;
//       }
//     }
//   }
//   return grid;
// };
// const setProximityNumbers = (grid) => {
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[row].length; col++) {
//       if (grid[row][col] !== '*') {
//         let adjacentCells = [
//           grid[row][col + 1],
//           grid[row][col - 1],
//         ];
//         if (grid[row + 1]) {
//           adjacentCells = [
//             ...adjacentCells,
//             grid[row + 1][col + 1],
//             grid[row + 1][col],
//             grid[row + 1][col - 1]]
//         }
//         if (grid[row - 1]) {
//           adjacentCells = [
//             ...adjacentCells,
//             grid[row - 1][col - 1],
//             grid[row - 1][col],
//             grid[row - 1][col + 1]
//           ]
//         }
//         const mineCount = adjacentCells.filter(cell => cell === "*").length;
//         grid[row][col] = mineCount;
//       }
//     }
//   }
//   return grid;
// };
// const testGrid = (createGrid(3, 4));
// const minedGrid = setMines(testGrid, [1, 1], 3)
// console.log(setProximityNumbers(minedGrid));