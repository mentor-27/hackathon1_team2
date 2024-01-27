import {Module} from "@/core/module";
import {random} from "@/utils";

export class RandomSound extends Module
{
    #audio
    #soundArray

    // Принимает на вход массив со значениями пути к аудио
    constructor(soundArray, type = 'RandomSound', text = 'Проиграть звук') {
        super(type, text);
        this.#audio = new Audio();
        this.#soundArray = soundArray;
    }

    //Проигрыват аудио файл
    trigger()
    {
        this.#audio.src = this.#takeRandomSound();
        this.#audio.play();
    }

    //Выдаёт рандомный путь к аудио фалу
    #takeRandomSound()
    {
        const randomNumber = random(0, this.#soundArray.length);
        return this.#soundArray[randomNumber];
    }
}