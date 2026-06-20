class Grid {
  constructor(size, cellSize) {
    this.size = size;
    this.cellSize = cellSize;
  }

  draw(ctx) {
    ctx.strokeStyle = "#555";
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        ctx.strokeRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
      }
    }
  }
}
