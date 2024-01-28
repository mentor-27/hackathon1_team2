import { Module } from '@/core/module';
import {activeInput} from "@/utils";

export default class Paste extends Module {
  #activeElement;
  constructor(type = 'text_paste', text = 'Вставить') {
    super(type, text);

    //Получаем элемент в котором было открыто контекстное меню
    document.body.addEventListener('contextmenu', event => {
      this.#activeElement = activeInput(event);
    });
  }

  trigger() {
    navigator.clipboard
      .readText()
      .then(text => {
        this.#activeElement.value = this.#activeElement.value + text;
      })
      .catch(err => {
        // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
        console.error('Ошибка', err.message);
      });
  }
}
