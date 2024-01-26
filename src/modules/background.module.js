import { Module } from '../core/module';

export class BackgroundModule extends Module {
  constructor(type, text) {
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
