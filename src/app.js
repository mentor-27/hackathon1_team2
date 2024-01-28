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

const inputModules = [
    Modules.Copy,
    Modules.Paste
]

const contextMenu = new ContextMenu('#menu');
const inputContextMenu = new ContextMenu('#input_menu')

modules.forEach(module => {
  const currModule = new module();
  contextMenu.add(currModule);
});

inputModules.forEach(module => {
  const currModule = new module();
  inputContextMenu.add(currModule);
});
