class KitchenObject {
  constructor(type, x, y) {
    this.type = type;          // "ingredient" or "pot"
    this.x = x;
    this.y = y;
    this.progress = 0;         // 調理進行度
    this.hasIngredient = false; // ← 鍋に食材が入っているか
  }

  update() {
    // 鍋に食材が入っている時だけ調理が進む
    if (this.type === "pot" && this.hasIngredient && this.progress < 100) {
      this.progress += 0.2;
    }
  }

  draw(ctx, cellSize) {
    if (this.type === "ingredient") ctx.fillStyle = "yellow";
    if (this.type === "pot") ctx.fillStyle = "red";

    ctx.fillRect(this.x * cellSize, this.y * cellSize, cellSize, cellSize);

    // 鍋なら進行度を表示
    if (this.type === "pot") {
      ctx.fillStyle = "white";
      ctx.font = "16px sans-serif";
      ctx.fillText(
        Math.floor(this.progress),
        this.x * cellSize + 10,
        this.y * cellSize + 20
      );
    }
  }
}
