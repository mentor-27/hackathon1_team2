import { Module } from '../core/module';

export default class BackgroundModule extends Module {
  constructor(type = 'random_background', text = 'Поменять цвет') {
    super(type, text);
  }

  trigger() {
    const str = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += str[Math.floor(Math.random() * str.length)];
    }
    document.body.style.background = hex;
  }
}
