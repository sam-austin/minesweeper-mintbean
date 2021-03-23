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

  setMines(initialCell) {
    const adjacentCells = this.getAdjacentCells(initialCell);
    let i = 0;
    while (i < this.mineCount) {
      const randomCell = this.getRandomCell();
      if (randomCell.row !== initialCell.row && randomCell.column !== initialCell.column) {
        if (!adjacentCells.some(cell => cell.row === randomCell.row && cell.column === randomCell.column)) {
          if (!randomCell.value) {
            randomCell.value = "*";
            i++;
          }
        }
      }
    }
  }

  getAdjacentCells(cell) {
    const adjacentPositions = [
      { row: cell.row + 1, column: cell.column + 1 },
      { row: cell.row + 1, column: cell.column },
      { row: cell.row + 1, column: cell.column - 1 },
      { row: cell.row, column: cell.column + 1 },
      { row: cell.row, column: cell.column - 1 },
      { row: cell.row - 1, column: cell.column - 1 },
      { row: cell.row - 1, column: cell.column },
      { row: cell.row - 1, column: cell.column + 1 }
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

  uncoverClickedCell(row, column) {
    const clickedCell = this.cells.find(cell => cell.row === row && cell.column === column)
    clickedCell.uncovered = true;
  }

  uncoverAllCells() {
    this.cells.forEach(cell => cell.uncovered = true)
  }
}

export default Grid;