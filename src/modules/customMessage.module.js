import { Module } from '../core/module';

export class CustomMessage extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const messageBlock = document.createElement('div');
    messageBlock.className = 'custom-message';
    messageBlock.textContent = "Frontend's cool!";
    document.body.append(messageBlock);
    setTimeout(() => {
      messageBlock.remove();
    }, 3e3);
  }
}
