import {Module} from "../core/module";
import {activeInput, selection} from "../utils";

export default class Cut extends Module
{
    #activeElement;
    #selectText;
    constructor(type = 'text_cut', text = 'Вырезать') {
        super(type, text);
        //Получаем элемент в котором было открыто контекстное меню
        document.body.addEventListener('contextmenu', event => {
            this.#activeElement =activeInput(event);
        });

        document.body.addEventListener('mouseup', event => {
            const element = document.querySelector('.menu.open');
            if (!element) {
                this.#selectText = selection();
            }
        });
    }

    trigger()
    {
        if (this.#selectText.length > 0) {
            //API clipboard для асинхронного взаимодействия с буфером обмена
            navigator.clipboard
                .writeText(this.#selectText)
                .then()
                .catch(error => {
                    console.error(error);
                }
            );
            this.#activeElement.value =this.#activeElement.value.replace(this.#selectText, '');
        }
    }
}