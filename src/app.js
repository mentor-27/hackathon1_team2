import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { CustomMessage } from './modules/customMessage.module';
import { ShapeModule } from './modules/shape.module';
import { Timer } from './modules/timer.module';
import { RandomSound } from './modules/randomSound.module';
import './styles.css';

const customMessage = new CustomMessage('custom_message', 'Вызвать сообщение');
const randomBG = new BackgroundModule('random_background', 'Поменять цвет');
const timer = new Timer('timer', 'Установить таймер');
const randomSound = new RandomSound('random_sound');
const clickAnalytics = new ClicksModule('clicks', 'Счетчик кликов');
const randomShape = new ShapeModule('Shape', 'Рандомная фигура');

const modules = [customMessage, randomBG, timer, randomSound, clickAnalytics, randomShape];

const contextMenu = new ContextMenu('#menu');

modules.forEach(module => {
  contextMenu.add(module);
});

contextMenu.init(modules);
