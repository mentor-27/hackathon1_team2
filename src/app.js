import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { CustomMessage } from './modules/customMessage.module';
import { ShapeModule } from './modules/shape.module';
import { Timer } from './modules/timer.module';
import { RandomSound } from './modules/randomSound.module';
import './styles.css';
import {Copy} from "@/modules/textCopy";
import {Paste} from "@/modules/textPaste.modules";
import {CONTEXT_MENU, INPUT_CONTEXT_MENU} from "@/data/const";

const customMessage = new CustomMessage('custom_message', 'Вызвать сообщение');
const randomBG = new BackgroundModule('random_background', 'Поменять цвет');
const timer = new Timer('timer', 'Установить таймер');
const randomSound = new RandomSound('random_sound');
const clickAnalytics = new ClicksModule('clicks', 'Счетчик кликов');
const textCopy = new Copy();
const textPast = new Paste();

const modules = [customMessage, randomBG, timer, randomSound, clickAnalytics, textCopy];
const inputModules = [textCopy, textPast]

const contextMenu = new ContextMenu('#menu');
const inputContextMenu = new ContextMenu('#input_menu');

modules.forEach(module => {
  contextMenu.add(module);
});

inputModules.forEach(module => {
  inputContextMenu.add(module);
});

contextMenu.init(modules, CONTEXT_MENU);
inputContextMenu.init(inputModules, INPUT_CONTEXT_MENU);