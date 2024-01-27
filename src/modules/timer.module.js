import { Module } from '../core/module'

export class Timer extends Module {
	constructor(type, text) {
		super(type, text)
	}

	trigger() {
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

		const timeDisplay = document.createElement('span')
		timeDisplay.textContent = '0'
		const timeDisplayBlock = document.createElement('div')
		timeDisplayBlock.textContent = `Осталось ${timeDisplay.textContent} секунд`

		form.append(input, startTimerBtn)
		block.append(form)
		document.body.append(block)

		startTimerBtn.addEventListener('click', event => {
			event.preventDefault()
			block.append(timeDisplayBlock)
		})
	}
}
