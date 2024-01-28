import { Module } from '../core/module';

export class ShapeModule extends Module {
  constructor(type = "Shape", text = "Создать случайную фигуру") {
    super(type, text);
    this.initializeCanvas();
    window.addEventListener("resize", () => this.adjustCanvasSize());
  }

  initializeCanvas() {
    this.canvas = document.createElement("canvas");
    document.body.append(this.canvas);
    this.adjustCanvasSize();
  }

  adjustCanvasSize() {
    const canvasMargin = 50;
    this.canvas.width = window.innerWidth - canvasMargin;
    this.canvas.height = window.innerHeight - canvasMargin;
  }

  trigger() {
    const ctx = this.canvas.getContext("2d");
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * (letters.length - 1))];
      }
      return color;
    }

    const shapes = ["square", "circle", "triangle", "diamond", "rectangle", "oval"];
    const randomShape = shapes[Math.floor(Math.random() * (shapes.length - 1))];

    const size = Math.floor(Math.random() * 150) + 100;
    const x = Math.random() * (this.canvas.width - size);
    const y = Math.random() * (this.canvas.height - size);
    const color = getRandomColor();

    if (color === "#FFFFFF") {
      ctx.strokeStyle = "black";
    } else {
      ctx.strokeStyle = color;
    }

    ctx.fillStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();

    switch (randomShape) {
      case "square":
        ctx.rect(x, y, size, size);
        break;
      case "circle":
        ctx.arc(x + size / 2, y + size / 2, size / 2, 0, 2 * Math.PI);
        break;
      case "triangle":
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y + size);
        break;
      case "diamond":
        ctx.moveTo(x + size / 2, y);
        ctx.lineTo(x + size, y + size / 2);
        ctx.lineTo(x + size / 2, y + size);
        ctx.lineTo(x, y + size / 2);
        break;
      case "rectangle":
        ctx.rect(x, y, size, size * 1.5);
        break;
      case "oval":
        ctx.ellipse(x + size / 2, y + size / 2, size / 2, size / 3, 0, 0, 2 * Math.PI);
        break;
    }

    ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}
