import { ContextMenu } from './menu';
import * as Modules from './modules';
import './styles.css';
import { CONTEXT_MENU, INPUT_CONTEXT_MENU } from '@/data/const';

const modules = [
  Modules.CustomMessage,
  Modules.BackgroundModule,
  Modules.Timer,
  Modules.RandomSound,
  Modules.ClicksModule,
  Modules.Copy,
  Modules.ShapeModule,
  Modules.CurrencyCheck
];

const inputModules = [Modules.Copy, Modules.Paste];

const contextMenu = new ContextMenu('#menu', CONTEXT_MENU);
const inputContextMenu = new ContextMenu('#input_menu', INPUT_CONTEXT_MENU);

modules.forEach(module => {
  const currModule = new module();
  contextMenu.add(currModule);
});

inputModules.forEach(module => {
  const currModule = new module();
  inputContextMenu.add(currModule);
});
