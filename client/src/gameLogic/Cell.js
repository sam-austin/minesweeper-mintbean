class Cell {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.value = null;
    this.uncovered = false;
    this.flagged = false;
  }

  uncover() {
    this.uncovered = true;
  }

  flag() {
    this.flagged = !this.flagged;
  }
}

export default Cell;
