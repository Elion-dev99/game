class KitchenObject {
  constructor(type, x, y) {
    this.type = type; // "ingredient" or "pot"
    this.x = x;
    this.y = y;
    this.progress = 0; // 調理進行度
  }

  update() {
    if (this.type === "pot" && this.progress < 100) {
      this.progress += 0.2;
    }
  }

  draw(ctx, cellSize) {
    if (this.type === "ingredient") ctx.fillStyle = "yellow";
    if (this.type === "pot") ctx.fillStyle = "red";

    ctx.fillRect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);

    if (this.type === "pot") {
      ctx.fillStyle = "white";
      ctx.fillText(Math.floor(this.progress), this.x * cellSize + 10, this.y * cellSize + 20);
    }
  }
}
