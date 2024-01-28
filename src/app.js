import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { CustomMessage } from './modules/customMessage.module';
import { ShapeModule } from './modules/shape.module';
import { Timer } from './modules/timer.module';
import { RandomSound } from './modules/randomSound.module';
import { Copy } from './modules/textCopy.module';
import './styles.css';

const customMessage = new CustomMessage();
const randomBG = new BackgroundModule();
const timer = new Timer();
const randomSound = new RandomSound();
const clickAnalytics = new ClicksModule();
const textCopy = new Copy();

const modules = [
  customMessage,
  randomBG,
  timer,
  randomSound,
  clickAnalytics,
  textCopy
];

const contextMenu = new ContextMenu('#menu');

modules.forEach(module => {
  contextMenu.add(module);
});

contextMenu.init(modules);
