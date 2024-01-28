import {Module} from "@/core/module";

export class Copy extends Module
{
    #selectText;
    #contextMenu;
    constructor(type = 'copy_text', text = 'Копировать') {
        super(type, text);

        document.body.addEventListener('mouseup', event => {
            const element = document.querySelector('.menu.open');
            if(!element)
            {
                this.#selection();
            }
        })
    }

    trigger()
    {
        if(this.#selectText.length > 0)
        {
            //API clipboard для асинхронного взаимодействия с буфером обмена
            navigator.clipboard.writeText(this.#selectText)
                .then()
                .catch((error) =>{
                        console.error(error);
                }
            );
        }
    }

    //Записываем выделенный текс в переменную
    #selection()
    {
        this.#selectText = window.getSelection().toString();
    }
}