class Cell {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.value = null;
    this.uncovered = false;
  }
}

export default Cell;