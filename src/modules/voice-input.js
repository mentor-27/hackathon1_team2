import { Module } from '../core/module';

export default class VoiceInput extends Module {
	constructor(type = 'voice', text = 'Голосовой ввод') {
		super(type, text);
	}

	trigger() {
		const input = document.querySelector('.text_input');
		input.type = 'text';

		const listenBtn = document.createElement('button');
		listenBtn.classList.add('voice-btn__listen');
		listenBtn.textContent = 'Голосовой ввод';
		const recognizer = new webkitSpeechRecognition();
		recognizer.interimResults = true;
		recognizer.lang = 'ru-Ru';

		recognizer.onresult = event => {
			const result = event.results[event.resultIndex];
			if (!result.isFinal) return;

			const newWord = result[0].transcript;
			addTextInInput(newWord);
		};

		function addTextInInput(text) {
			input.value = text;
		}

		listenBtn.addEventListener('click', () => {
			input.focus();
			recognizer.stop();
			setTimeout(() => recognizer.start(), 200);
		});

		document.body.append(listenBtn);
	}
}
