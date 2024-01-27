import { Module } from '../core/module';

export class ShapeModule extends Module {
  constructor(type = "Shape", text = "Создать случайную фигуру") {
    super(type, text);
    this.initializeCanvas();
  }

  initializeCanvas() {
    this.canvas = document.createElement("canvas");
    document.body.append(this.canvas);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  trigger() {
    const ctx = this.canvas.getContext("2d");
    function getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * (letters.length - 1))];
      }
      return color;
    }

    let shapes = ["square", "circle", "triangle", "diamond", "rectangle", "oval"];
    let randomShape = shapes[Math.floor(Math.random() * (shapes.length - 1))];

    let size = Math.floor(Math.random() * 150) + 100;
    let x = Math.random() * (this.canvas.width - size);
    let y = Math.random() * (this.canvas.height - size);
    let color = getRandomColor();

    if (color === "#FFFFFF") {
      ctx.strokeStyle = "black";
    } else {
      ctx.strokeStyle = color;
    }

    ctx.fillStyle = color;
    ctx.lineWidth = 3;

    switch (randomShape) {
      case "square":
        ctx.beginPath();
        ctx.rect(x, y, size, size);
        break;
      case "circle":
        ctx.beginPath();
        ctx.arc(x + size / 2, y + size / 2, size / 2, 0, 2 * Math.PI);
        break;
      case "triangle":
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y + size);
        break;
      case "diamond":
        ctx.beginPath();
        ctx.moveTo(x + size / 2, y);
        ctx.lineTo(x + size, y + size / 2);
        ctx.lineTo(x + size / 2, y + size);
        ctx.lineTo(x, y + size / 2);
        break;
      case "rectangle":
        ctx.beginPath();
        ctx.rect(x, y, size, size * 1.5);
        break;
      case "oval":
        ctx.beginPath();
        ctx.ellipse(x + size / 2, y + size / 2, size / 2, size / 3, 0, 0, 2 * Math.PI);
        break;
    }

    ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}
