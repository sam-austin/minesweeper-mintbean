class Cell {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.value = null;
    this.covered = true;
    this.flagged = false;
  }

  uncover() {
    if (!this.flagged) {
      this.covered = false;
    }
  }

  flag() {
    this.flagged = !this.flagged;
  }
}

export default Cell