import { Module } from '../core/module';
import {selection} from "../utils";

export default class Copy extends Module {
  #selectText;
  constructor(type = 'copy_text', text = 'Копировать') {
    super(type, text);

    document.body.addEventListener('mouseup', event => {
      const element = document.querySelector('.menu.open');
      if (!element) {
        this.#selectText = selection();
      }
    });
  }

  trigger() {
    if (this.#selectText.length > 0) {
      //API clipboard для асинхронного взаимодействия с буфером обмена
      navigator.clipboard
        .writeText(this.#selectText)
        .then()
        .catch(error => {
          console.error(error);
        });
    }
  }
}
