class Cell {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.value = null;
    this.uncovered = false;
  }
  uncover() {
    this.uncovered = true;
  }
}

export default Cell;
