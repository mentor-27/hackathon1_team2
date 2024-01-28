import { Module } from '@/core/module';
import { random } from '@/utils';

export default class RandomSound extends Module {
  #audioFiles = [];

  // Принимает на вход type и text передаёт в базовый конструктор
  constructor(type = 'RandomSound', text = 'Проиграть звук') {
    super(type, text);
  }

  //Проигрыват аудио файл
  trigger() {
    //Подгружаем все аудио файлы
    if (this.#audioFiles.length === 0) {
      this.#importAll(require.context('../', true, /\.wav$/));
    }
    const audio = new Audio(`${this.#takeRandomSound()}`);
    audio.play();
  }

  //Выдаёт рандомный путь к аудио файлу
  #takeRandomSound() {
    const randomNumber = random(0, this.#audioFiles.length - 1);
    return this.#audioFiles[randomNumber];
  }

  //Импорт всех аудио файлов
  #importAll(r) {
    r.keys().forEach(s => {
      this.#audioFiles.push(s);
    });
  }
}
