import {Module} from "@/core/module";

export class Paste extends Module
{
    #activeElement;
    constructor(type = 'text_paste', text = 'Вставить') {
        super(type, text);

        //Получаем элемент в котором было открыто контекстное меню
        document.body.addEventListener('contextmenu', event => {
            this.#addActiveElement(event);
        })
    }

    trigger(event)
    {
        navigator.clipboard.readText()
        .then(text => {
            this.#activeElement.value = this.#activeElement.value + text;
        })
        .catch(err => {
            // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
            console.log('Ошибка', err);
        });
    }


    // Проверяем, что это текстовое поле
    #addActiveElement(event)
    {
        const element = event.target.closest('.text_input');
        if(element)
        {
            this.#activeElement = element;
        }
    }
}