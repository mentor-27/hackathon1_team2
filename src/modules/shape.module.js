import { Module } from '../core/module';

export default class ShapeModule extends Module {
  constructor(type = 'Shape', text = 'Создать случайную фигуру') {
    super(type, text);
    this.initializeCanvas();
    window.addEventListener('resize', () => this.adjustCanvasSize());
  }

  initializeCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('willReadFrequently', 'true');
    document.body.prepend(this.canvas);
    this.adjustCanvasSize();
  }

  adjustCanvasSize() {
    const backup = this.canvas
      .getContext('2d')
      .getImageData(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = window.screen.width;
    this.canvas.height = window.screen.height;
    this.canvas.getContext('2d').putImageData(backup, 0, 0);
  }

  trigger() {
    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * (letters.length - 1))];
      }
      return color;
    }

    const shapes = [
      'square',
      'circle',
      'triangle',
      'diamond',
      'rectangle',
      'oval'
    ];
    const randomShape = shapes[Math.floor(Math.random() * (shapes.length - 1))];

    const size = Math.floor(Math.random() * 150) + 100;
    const x = Math.random() * (this.canvas.width - size);
    const y = Math.random() * (this.canvas.height - size);
    const color = getRandomColor();

    if (color === '#FFFFFF') {
      ctx.strokeStyle = 'black';
    } else {
      ctx.strokeStyle = color;
    }

    ctx.fillStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();

    switch (randomShape) {
      case 'square':
        ctx.rect(x, y, size, size);
        break;
      case 'circle':
        ctx.arc(x + size / 2, y + size / 2, size / 2, 0, 2 * Math.PI);
        break;
      case 'triangle':
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y + size);
        break;
      case 'diamond':
        ctx.moveTo(x + size / 2, y);
        ctx.lineTo(x + size, y + size / 2);
        ctx.lineTo(x + size / 2, y + size);
        ctx.lineTo(x, y + size / 2);
        break;
      case 'rectangle':
        ctx.rect(x, y, size, size * 1.5);
        break;
      case 'oval':
        ctx.ellipse(
          x + size / 2,
          y + size / 2,
          size / 2,
          size / 3,
          0,
          0,
          2 * Math.PI
        );
        break;
    }

    ctx.shadowColor = 'rgba(0, 0, 0, 0.05)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 0.3;
    ctx.shadowOffsetY = -0.2;

    let alpha = 0;
    function fadeIn() {
      if (alpha < 1) {
        alpha += 0.01;
        requestAnimationFrame(fadeIn);
      }
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.stroke();
    }

    fadeIn();
    ctx.closePath();
  }
}
