import { Module } from '../core/module'

export class Timer extends Module {
	constructor(type, text) {
		super(type, text)
	}

	trigger() {
		const isTimerBlock = document.querySelector('.timer-block')
		if (!isTimerBlock) {
			const block = document.createElement('div')
			block.classList.add('custom-message', 'timer-block')

			const form = document.createElement('form')
			form.classList.add('timer-form')

			const startTimerBtn = document.createElement('button')
			startTimerBtn.classList.add('timer-form__button')
			startTimerBtn.textContent = 'Запустить таймер'

			const input = document.createElement('input')
			input.classList.add('timer-form__input')
			input.min = 1
			input.max = 1000
			input.type = 'number'
			input.placeholder = 'Введите нужное время в секундах'

			const timeDisplayBlock = document.createElement('div')
			timeDisplayBlock.id = 'timeDisplayBlock'

			form.append(input, startTimerBtn)
			block.append(form)
			document.body.append(block)

			this.#startTimer(startTimerBtn, block, timeDisplayBlock, input)
		}
	}

	#startTimer(startTimerBtn, block, timeDisplayBlock, input) {
		startTimerBtn.addEventListener('click', event => {
			event.preventDefault()
			block.append(timeDisplayBlock)

			const inputValue = input.value
			let timer = Number(inputValue)

			if (!timeDisplayBlock.textContent && inputValue) {
				const timerWork = setInterval(() => {
					timer--
					this.#secondsDisplayOption(timer, timeDisplayBlock)

					if (timer < 0) {
						clearInterval(timerWork)
						block.remove()
					}
				}, 1000)
			}
		})
	}

	#secondsDisplayOption(num, block) {
		if (num % 10 >= 11 && num % 10 <= 19) {
			block.textContent = `Осталось ${num} секунд`
		} else if (num % 10 === 1) {
			block.textContent = `Осталось ${num} секунда`
		} else if (num % 10 >= 2 && num % 10 <= 4) {
			block.textContent = `Осталось ${num} секунды`
		} else {
			block.textContent = `Осталось ${num} секунд`
		}
	}
}
