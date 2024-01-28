import { Module } from '../core/module';

export default class CustomMessage extends Module {
  constructor(type = 'custom_message', text = 'Вызвать сообщение') {
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
