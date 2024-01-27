import { Module } from '../core/module';

export class Timer extends Module {
	constructor(type, text) {
		super(type, text);
	}

	trigger() {
		const isTimerBlock = document.querySelector('.timer-block');
		if (isTimerBlock) {
			return;
		}
		const block = document.createElement('div');
		block.classList.add('custom-message', 'timer-block');

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

		this.#startTimer(startTimerBtn, block, timeDisplayBlock, input);
	}

	#startTimer(startTimerBtn, block, timeDisplayBlock, input) {
		startTimerBtn.addEventListener('click', () => {
			let inputValue = Number(input.value);
			if (!inputValue) {
				return;
			}
			input.replaceWith(timeDisplayBlock);
			startTimerBtn.remove();

			timeDisplayBlock.textContent = `Осталось ${inputValue} сек`;
			const timerWork = setInterval(() => {
				timeDisplayBlock.textContent = `Осталось ${--inputValue} сек`;

				if (inputValue < 0) {
					clearInterval(timerWork);
					block.remove();
				}
			}, 1000);
		});
	}
}
