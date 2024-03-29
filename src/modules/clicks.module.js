import { Module } from '../core/module';

export default class ClicksModule extends Module {
  constructor(type = 'click_analytics', text = 'Счетчик кликов') {
    super(type, text);
  }

  trigger() {
    const isCountBlock = document.querySelector('.count-block');

    if (isCountBlock) {
      return;
    }

    const block = document.createElement('div');
    block.classList.add('custom-message', 'count-block');

    const startTimerBtn = document.createElement('button');
    startTimerBtn.classList.add('timer-button');
    startTimerBtn.textContent = 'Запустить таймер';

    const input = document.createElement('input');
    input.classList.add('timer-input');
    input.type = 'text';
    input.placeholder = 'Значение в секундах';

    input.addEventListener('input', event => {
      const { target } = event;
      target.value = target.value.replace(/\D/g, '');
    });

    const timeDisplayBlock = document.createElement('div');
    timeDisplayBlock.id = 'timeDisplayBlock';

    block.append(input, startTimerBtn);
    document.body.append(block);

    startTimerBtn.addEventListener('click', () => {
      let clickCount = -1;
      let inputValue = Number(input.value);

      if (!inputValue) {
        return;
      }

      document.addEventListener('click', () => clickCount++);

      input.replaceWith(timeDisplayBlock);
      startTimerBtn.remove();
      timeDisplayBlock.textContent = `Осталось ${inputValue} сек`;

      const timerWork = setInterval(() => {
        timeDisplayBlock.textContent = `Осталось ${--inputValue} сек`;

        if (inputValue <= 0) {
          clearInterval(timerWork);
          const statsMessage = `Вы сделали ${clickCount} кликов за ${input.value} секунд(ы).`;
          timeDisplayBlock.textContent = statsMessage;
          setTimeout(() => {
            block.remove();
          }, 3e3);
        }
      }, 1000);
    });
  }
}
