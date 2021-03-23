import Cell from "./Cell.js";

class Grid {
  constructor(width, height, mineCount) {
    this.width = width;
    this.height = height;
    this.mineCount = mineCount;
    this.cells = this.createCells();
  }

  createCells() {
    const cells = [];
    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        cells.push(new Cell(row, column));
      }
    }
    return cells;
  }

  getRandomCell() {
    const randomIndex = Math.floor(Math.random() * this.cells.length);
    return this.cells[randomIndex];
  }
  // FIXME: prevent mines from being clumped together
  // FIXME: mine can't be placed in any cell adjacent to initial cell either.

  setMines(initialCell) {
    let i = 0;
    while (i < this.mineCount) {
      const randomCell = this.getRandomCell();
      if (randomCell.row !== initialCell.row && randomCell.column !== initialCell.column) {
        if (!randomCell.value) {
          randomCell.value = "*";
          i++;
        }
      }
    }
  }

  getAdjacentCells(cell) {
    const adjacentPositions = [
      {row: cell.row + 1, column: cell.column + 1}, 
      {row: cell.row + 1, column: cell.column},
      {row: cell.row + 1, column: cell.column - 1},
      {row: cell.row, column: cell.column + 1},
      {row: cell.row, column: cell.column - 1},
      {row: cell.row - 1, column: cell.column - 1},
      {row: cell.row - 1, column: cell.column},
      {row: cell.row - 1, column: cell.column + 1}
    ];

    return this.cells.filter((cell) => {
      return adjacentPositions.some((pos) => cell.row == pos.row && cell.column == pos.column);
    });
  }

  setProximityNumbers() {
    this.cells.forEach((cell) => {
      if (cell.value !== "*") {
        const adjacentCells = this.getAdjacentCells(cell);
        cell.value = adjacentCells.filter((adjacentCell) => adjacentCell.value === "*").length;
      }
    });
  }
}

export default Grid;