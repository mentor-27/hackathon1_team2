import {Module} from "@/core/module";

export class Copy extends Module
{
    #selectText;
    #contextMenu;
    constructor(type = 'copy_text', text = 'Копировать') {
        super(type, text);

        //Событие клика для проверки, что мы вышли из контекстного меню
        document.addEventListener('click', () => {
            this.#contextMenu = false;
        })

        //Событие открытия конекстного для проверкичто бы в него вошли
        document.addEventListener('contextmenu', () => {
            this.#contextMenu = true;
        });

        //Событие смены текущего выделения
        document.addEventListener('selectionchange', event => {
            if(!this.#contextMenu)
            {
                this.#selection();
            }
        });
    }

    trigger()
    {
        //API clipboard для асинхронного взаимодействия с буфером обмена
        navigator.clipboard.writeText(this.#selectText)
            .then()
            .catch((error) =>{
                console.error(error);
            }
        );
    }

    //Записываем выделенный текс в переменную
    #selection()
    {
        this.#selectText = window.getSelection().toString();
    }
}