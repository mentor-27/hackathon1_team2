import { ContextMenu } from './menu';
import * as Modules from './modules';
import './styles.css';

const modules = [
  Modules.CustomMessage,
  Modules.BackgroundModule,
  Modules.Timer,
  Modules.RandomSound,
  Modules.ClicksModule,
  Modules.Copy,
  Modules.ShapeModule
];

const contextMenu = new ContextMenu('#menu');

modules.forEach(module => {
  const currModule = new module();
  contextMenu.add(currModule);
});
