import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { CustomMessage } from './modules/customMessage.module';
import { ShapeModule } from './modules/shape.module';
import { Timer } from './modules/timer.module';
import { RandomSound } from './modules/randomSound.module';
import { Copy } from './modules/textCopy.module';
import './styles.css';

const modules = [
  CustomMessage,
  BackgroundModule,
  Timer,
  RandomSound,
  ClicksModule,
  Copy,
  ShapeModule
];

const contextMenu = new ContextMenu('#menu');

modules.forEach(module => {
  const currModule = new module();
  contextMenu.add(currModule);
  contextMenu.addListener(currModule);
});
