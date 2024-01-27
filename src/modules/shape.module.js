import {Module} from '../core/module'

export class ShapeModule extends Module {
  constructor(type = "Shape", text = "Создать случайную фигуру") {
		super(type, text);
	}
  
  trigger() {
  function drawRandomShape() {
    let canvas = document.createElement("canvas");
    document.body.append(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext("2d");
    function getRandomColor() {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    let shapes = ["square", "circle", "triangle", "diamond", "rectangle", "oval"];
    let randomShape = shapes[Math.floor(Math.random() * shapes.length)];

    let x = Math.random() * (canvas.width - 250);
    let y = Math.random() * (canvas.height - 250);
    let size = Math.floor(Math.random() * 150) + 100;
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
        ctx.rect(x, y, size, size);
        break;
      case "circle":
        ctx.arc(x + size / 2, y + size / 2, size / 2, 0, 2 * Math.PI);
        break;
      case "triangle":
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y + size);
        ctx.closePath();
        break;
      case "diamond":
        ctx.moveTo(x + size / 2, y);
        ctx.lineTo(x + size, y + size / 2);
        ctx.lineTo(x + size / 2, y + size);
        ctx.lineTo(x, y + size / 2);
        ctx.closePath();
        break;
      case "rectangle":
        ctx.rect(x, y, size, size * 1.5);
        break;
      case "oval":
        ctx.ellipse(x + size / 2, y + size / 2, size / 2, size / 3, 0, 0, 2 * Math.PI);
        break;
    }

      ctx.fill();
      ctx.stroke();
  } 

  drawRandomShape();
  }
}