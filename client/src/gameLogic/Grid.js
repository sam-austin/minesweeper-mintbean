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

  getRandomCell(region) {
    let randomIndex;
    if (region === "top") {
      randomIndex = Math.floor(Math.random() * this.cells.length / 2);
    }
    if (region === "bottom") {
      randomIndex = Math.floor(this.cells.length / 2 + Math.random() * this.cells.length / 2)
    }
    return this.cells[randomIndex];
  }

  // FIXME: prevent mines from being clumped together

  setMines(initialCell) {
    const adjacentCells = this.getAdjacentCells(initialCell);
    let i = 0;
    let randomCell;
    while (i < this.mineCount) {
      if (i < Math.floor(this.mineCount / 2)) {
        randomCell = this.getRandomCell("top");
      }
      if (i >= Math.floor(this.mineCount / 2)) {
        randomCell = this.getRandomCell("bottom")
      }
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
      const isAdjacent = adjacentPositions.some(
        (pos) => cell.row == pos.row && cell.column == pos.column
      );
      if (isAdjacent && !cell.uncovered) {
        return cell;
      }
    });
  }

  chainUncover(clickedCell) {
    const adjacentCells = this.getAdjacentCells(clickedCell);
    if (adjacentCells.length === 0) {
      return;
    }
    adjacentCells.forEach((cell) => {
      cell.uncover();
      if (cell.value === 0) {
        this.chainUncover(cell);
      }
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
    const clickedCell = this.cells.find((cell) => cell.row === row && cell.column === column);
    clickedCell.uncovered = true;
  }

  uncoverAllMines() {
    this.cells.forEach(cell => {
      if (cell.value === "*") {
        cell.uncovered = true;
      }
    });
  }

  countFlaggedCells() {
    return this.cells.filter((cell) => cell.flagged).length
  }

  countFlaggedMines() {
    return this.cells.filter((cell) => cell.value === "*" && cell.flagged).length;
  }

  determineWin() {
    const uncoveredCount = this.cells.filter((cell) => cell.uncovered).length;
    return (uncoveredCount === this.cells.length - this.mineCount || this.countFlaggedMines() === this.mineCount);
  }
}

export default Grid;
